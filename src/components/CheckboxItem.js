const CheckboxItem = (props) => {
  const changeHandler = (event) => {
    props.onSelect(+event.target.id);
  };

  return (
    <tr>
      <td>
        {props.checkable && (
          <input
            type="checkbox"
            id={props.id}
            checked={props.isChecked}
            onChange={changeHandler}
          />
        )}
      </td>
      <td>{props.text}</td>
    </tr>
  );
};

export default CheckboxItem;
