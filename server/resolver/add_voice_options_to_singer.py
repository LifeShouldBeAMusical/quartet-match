from sqlalchemy import select

from api import VoiceOption, VoiceOptionInput
from database import SingerModel, VoiceOptionModel, get_async_session
from resolver.get_singer import get_singer


async def add_voice_options_to_singer(
    singer_id: int, voice_options: list[VoiceOptionInput]
) -> list[VoiceOption]:
    async with get_async_session() as session:
        singer = (
            await session.scalars(
                select(SingerModel).where(SingerModel.id == singer_id)
            )
        ).one()
        all_options = (await session.scalars(select(VoiceOptionModel))).all()

        for option in voice_options:
            singer.voice_options.extend(
                vo
                for vo in all_options
                if vo.quartet_range == option.quartet_range
                and vo.singer_voice == option.voice
            )

        await session.commit()

    result = await get_singer(singer_id)
    return result.voice_options
