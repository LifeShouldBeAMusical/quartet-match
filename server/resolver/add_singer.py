from sqlalchemy import insert

from api import Singer, SingerInput
from database import SingerModel, get_async_session
from resolver.add_voice_options_to_singer import add_voice_options_to_singer
from resolver.get_singer import get_singer


async def add_singer(singer: SingerInput) -> Singer:

    singer_id = None

    async with get_async_session() as session:
        singer_id = await session.scalar(
            insert(SingerModel)
            .values(
                {
                    "first_name": singer.name.first.strip(),
                    "last_name": singer.name.last.strip(),
                }
            )
            .returning(SingerModel.id)
        )
        await session.commit()

    if singer_id is not None:
        await add_voice_options_to_singer(singer_id, singer.voice_options)

        return await get_singer(singer_id)

    raise ValueError("ID NOT SET")
