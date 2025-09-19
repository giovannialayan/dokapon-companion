interface Props {
  hide: boolean;
}

function ItemSearch({ hide }: Props) {
  return <div className={hide ? 'hide' : ''}>ItemSearch</div>;
}

export default ItemSearch;
