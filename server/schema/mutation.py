"""GraphQL Mutation"""

import strawberry

from resolver import add_voice_options_to_singer


@strawberry.type
class Mutation:
    """GraphQL Mutation"""

    add_voice_options_to_singer = strawberry.field(
        description="Add Voice Options to Singer", resolver=add_voice_options_to_singer
    )
