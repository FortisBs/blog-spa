type QueryKeys = string | 'limit' | 'offset' | 'search';

type QueryValues = string | number | boolean;

export type QueryParams = Record<QueryKeys, QueryValues>;
