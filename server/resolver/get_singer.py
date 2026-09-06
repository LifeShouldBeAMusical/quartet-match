from sqlalchemy import select

from api import SingerName, Singer, VoiceOption
from database import SingerModel, get_async_session


async def get_singer(singer_id: int) -> Singer:

    async with get_async_session() as session:
        result = (
            await session.scalars(
                select(SingerModel).where(SingerModel.id == singer_id)
            )
        ).one()

        return Singer(
            result.id,
            SingerName(result.first_name, result.last_name),
            [
                VoiceOption(vo.quartet_range, vo.singer_voice)
                for vo in result.voice_options
            ],
        )
