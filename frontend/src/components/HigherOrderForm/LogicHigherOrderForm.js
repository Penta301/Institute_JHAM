import HigherOrderForm from "./HigherOrderForm";

function LogicHigherOrderForm({
  autoInputs,
  manualInputs,
  actionCB,
  setter,
  cancelCB,
}) {
  const iterateInputs = (object, setter) => {
    return Object.entries(object).map((item, index) => {
      const construcction = (
        <input
          className="text_input_form shadow text"
          key={index}
          type="text"
          placeholder={[item[0]]}
          value={item[1]}
          onChange={(e) => setter({ ...object, [item[0]]: e.target.value })}
        />
      );
      return construcction;
    });
  };
  return (
    <HigherOrderForm
      iterateInputs={iterateInputs}
      setter={setter}
      actionCB={actionCB}
      autoInputs={autoInputs}
      manualInputs={manualInputs}
      cancelCB={cancelCB}
    />
  );
}

export default LogicHigherOrderForm;
