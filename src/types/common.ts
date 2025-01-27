type Id = 'id';

export type IdParams = Record<Id, string>;

export type ParamProps = {
	params: Promise<IdParams>;
};
