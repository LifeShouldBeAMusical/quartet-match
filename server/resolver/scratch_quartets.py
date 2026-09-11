from random import random
from typing import Optional

from sqlalchemy import select

from api import Quartet, Singer, SingerName
from database import SingerModel, get_async_session
from enum_model import SingerVoiceEnum


async def scratch_quartets() -> list[Quartet]:

    async with get_async_session() as session:
        singers = (await session.scalars(select(SingerModel))).all()

        attempts = 0
        valid = False
        quartets = []
        while not valid and attempts < 100:
            print(attempts)
            quartets = []

            shuffled_singers = sorted(singers, key=lambda x: random())
            step_valid = True

            for idx in range(0, len(shuffled_singers), 4):
                step_valid &= (
                    q := valid_quartet(shuffled_singers[idx : idx + 4])
                ) is not None
                quartets.append(q)

            valid = step_valid
            attempts += 1

        return quartets


def valid_quartet(singers: list[SingerModel]) -> Optional[Quartet]:
    if len(singers) != 4:
        raise ValueError(f"Wrong Number of Singers: {len(singers)}")

    for permutation in permutations(singers[0], singers[1], singers[2], singers[3]):
        tenor = permutation[0]
        lead = permutation[1]
        bari = permutation[2]
        bass = permutation[3]

        tenorOptions = {
            v.quartet_range
            for v in tenor.voice_options
            if v.singer_voice == SingerVoiceEnum.TENOR
        }
        leadOptions = {
            v.quartet_range
            for v in lead.voice_options
            if v.singer_voice == SingerVoiceEnum.LEAD
        }
        bariOptions = {
            v.quartet_range
            for v in bari.voice_options
            if v.singer_voice == SingerVoiceEnum.BARI
        }
        bassOptions = {
            v.quartet_range
            for v in bass.voice_options
            if v.singer_voice == SingerVoiceEnum.BASS
        }
        combo = tenorOptions & leadOptions & bariOptions & bassOptions
        if len(combo) > 0:

            return Quartet(
                combo.pop(),
                tenor=Singer(
                    tenor.id, SingerName(tenor.first_name, tenor.last_name), []
                ),
                lead=Singer(lead.id, SingerName(lead.first_name, lead.last_name), []),
                bari=Singer(bari.id, SingerName(bari.first_name, bari.last_name), []),
                bass=Singer(bass.id, SingerName(bass.first_name, bass.last_name), []),
            )

    return None


def permutations(
    a: SingerModel, b: SingerModel, c: SingerModel, d: SingerModel
) -> list[list[SingerModel]]:
    return [
        [a, b, c, d],
        [a, b, d, c],
        [a, c, b, d],
        [a, c, d, b],
        [a, d, b, c],
        [a, d, c, b],
        [b, a, c, d],
        [b, a, d, c],
        [b, c, a, d],
        [b, c, d, a],
        [b, d, a, c],
        [b, d, c, a],
        [c, a, b, d],
        [c, a, d, b],
        [c, b, a, d],
        [c, b, d, a],
        [c, d, a, b],
        [c, d, b, a],
        [d, a, b, c],
        [d, a, c, b],
        [d, b, a, c],
        [d, b, c, a],
        [d, c, a, b],
        [d, c, b, a],
    ]
