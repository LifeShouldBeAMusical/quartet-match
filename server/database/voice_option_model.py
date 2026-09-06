"""Singer Table"""

from sqlalchemy import Enum, Integer
from sqlalchemy.orm import Mapped, mapped_column

from database.base import ModelBase
from database.quartet_range_enum import QuartetRangeEnum
from database.singer_voice_enum import SingerVoiceEnum


class VoiceOptionModel(ModelBase):
    """Voice Option"""

    __tablename__ = "voice_option"

    id: Mapped[int] = mapped_column("id", Integer, primary_key=True, autoincrement=True)
    """ID"""

    quartet_range: Mapped[QuartetRangeEnum] = mapped_column(
        "quartet_range", Enum(QuartetRangeEnum), nullable=False
    )
    """Quartet Range"""

    singer_voice: Mapped[SingerVoiceEnum] = mapped_column(
        "singer_voice", Enum(SingerVoiceEnum), nullable=False
    )
    """Singer Voice"""

    def __init__(self, quartet_range: QuartetRangeEnum, singer_voice: SingerVoiceEnum):
        self.quartet_range = quartet_range
        self.singer_voice = singer_voice

    def __str__(self) -> str:
        return (
            "VoiceOptionModel("
            + f"id={self.id}, "
            + f"quartet_range={self.quartet_range}, "
            + f"singer_voice={self.singer_voice}"
            + ")"
        )
