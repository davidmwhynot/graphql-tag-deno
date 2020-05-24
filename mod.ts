import { DocumentNode } from 'https://raw.githubusercontent.com/adelsz/graphql-deno/v15.0.0/mod.ts';
import gqlTag from './src/index.js';

const gql: (literals: any, ...placeholders: any[]) => DocumentNode = gqlTag;

export default gql;
