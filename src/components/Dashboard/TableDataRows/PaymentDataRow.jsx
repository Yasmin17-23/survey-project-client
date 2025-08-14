import PropTypes from "prop-types";

const PaymentDataRow = ({ payment }) => {
  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {payment?.user?.email}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {payment?.user?.name}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {payment?.transactionId}
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">{payment?.amount}</td>
    </tr>
  );
};

PaymentDataRow.propTypes = {
    payment: PropTypes.object,
}

export default PaymentDataRow;
