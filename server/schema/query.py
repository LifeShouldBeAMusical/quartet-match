"""GraphQL Query"""

import strawberry

from resolver import get_singer, scratch_quartets, singer_list


@strawberry.type
class Query:
    """GraphQL Query"""

    singer = strawberry.field(description="Singer", resolver=get_singer)
    singers = strawberry.field(description="List of Singers", resolver=singer_list)
    scratch_quartets = strawberry.field(
        description="Scratch Quartets", resolver=scratch_quartets
    )
