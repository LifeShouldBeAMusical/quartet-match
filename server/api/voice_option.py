"""Voice Option"""

import strawberry

from enum_model import QuartetRangeEnum, SingerVoiceEnum


@strawberry.type
class VoiceOption:
    quartet_range: QuartetRangeEnum
    voice: SingerVoiceEnum

    def __init__(self, quartet_range: QuartetRangeEnum, voice: SingerVoiceEnum):
        self.quartet_range = quartet_range
        self.voice = voice
