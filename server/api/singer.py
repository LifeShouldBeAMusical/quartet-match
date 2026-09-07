"""Singer"""

import strawberry

from api.singer_name import SingerName
from api.voice_option import VoiceOption


@strawberry.type
class Singer:
    """Singer"""

    id: strawberry.ID
    name: SingerName
    voice_options: list[VoiceOption]

    def __init__(self, id: int, name: SingerName, voice_options: list[VoiceOption]):
        self.id = strawberry.ID(id)
        self.name = name
        self.voice_options = voice_options
