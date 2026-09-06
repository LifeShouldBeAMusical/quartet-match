"""Singer Name"""

import strawberry


@strawberry.input
class SingerNameInput:
    first: str
    last: str
