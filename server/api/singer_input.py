"""Singer"""

import strawberry

from api.singer_name_input import SingerNameInput
from api.voice_option_input import VoiceOptionInput


@strawberry.input
class SingerInput:
    """Singer"""

    name: SingerNameInput
    voice_options: list[VoiceOptionInput]
