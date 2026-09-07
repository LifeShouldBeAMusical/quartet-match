"""Singer Name"""

import strawberry


@strawberry.type
class SingerName:
    first: str
    last: str

    def __init__(self, first: str, last: str):
        self.first = first
        self.last = last
