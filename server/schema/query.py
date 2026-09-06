"""GraphQL Query"""

import strawberry

from resolver import singer_list


@strawberry.type
class Query:
    """GraphQL Query"""

    singers = strawberry.field(description="List of Singers", resolver=singer_list)
