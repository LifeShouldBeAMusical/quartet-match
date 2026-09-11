"""Singer"""

import strawberry

from api.singer import Singer
from enum_model import QuartetRangeEnum


@strawberry.type
class Quartet:
    """Quartet"""

    quartet_range: QuartetRangeEnum
    tenor: Singer
    lead: Singer
    bari: Singer
    bass: Singer

    def __init__(
        self,
        quartet_range: QuartetRangeEnum,
        tenor: Singer,
        lead: Singer,
        bari: Singer,
        bass: Singer,
    ):
        self.quartet_range = quartet_range
        self.tenor = tenor
        self.lead = lead
        self.bari = bari
        self.bass = bass
