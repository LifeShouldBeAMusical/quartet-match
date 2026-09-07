from sqlalchemy import select

from api import SingerName, Singer, VoiceOption
from database import SingerModel, get_async_session


async def singer_list() -> list[Singer]:
    query = select(SingerModel)
    async with get_async_session() as session:
        results = (await session.scalars(query)).all()
        return [
            Singer(
                singer.id,
                SingerName(singer.first_name, singer.last_name),
                [
                    VoiceOption(vo.quartet_range, vo.singer_voice)
                    for vo in singer.voice_options
                ],
            )
            for singer in results
        ]
