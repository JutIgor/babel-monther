const fullNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const shortNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

module.exports = ({ types: t }) => {
  return {
    visitor: {
      ArrayExpression(path) {
        let elements = path.node.elements;

        if (elements.length !== 1 || elements[0].type !== 'StringLiteral') {
          return;
        }

        if (elements[0].value === 'months-full') {
          path.node.elements = fullNames.map(e => t.stringLiteral(e));
        }

        if (elements[0].value === 'months-short') {
          path.node.elements = shortNames.map(e => t.stringLiteral(e));
        }
      }
    }
  };
};