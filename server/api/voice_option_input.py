"""Voice Option"""

import strawberry

from enum_model import QuartetRangeEnum, SingerVoiceEnum


@strawberry.input
class VoiceOptionInput:
    quartet_range: QuartetRangeEnum
    voice: SingerVoiceEnum
