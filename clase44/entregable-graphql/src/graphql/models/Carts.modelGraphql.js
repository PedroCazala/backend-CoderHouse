import { graphql,buildSchema } from 'graphql'

const schemaCart = buildSchema(`
    type Query {
        pedro: String,
    }
`);
export{schemaCart}