"""GraphQL Mutation"""

import strawberry

from resolver import add_singer, add_voice_options_to_singer


@strawberry.type
class Mutation:
    """GraphQL Mutation"""

    add_singer = strawberry.field(description="Add Singer", resolver=add_singer)
    add_voice_options_to_singer = strawberry.field(
        description="Add Voice Options to Singer", resolver=add_voice_options_to_singer
    )
