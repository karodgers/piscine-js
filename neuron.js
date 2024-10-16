function neuron(data) {
  if (data.length === 0) {
    return {};
  }

  var output = { questions: {}, orders: {}, affirmations: {} };

  for (var i = 0; i < data.length; i++) {
    var parts = data[i].split(' - ');
    var typePart = parts[0].split(': ');
    var responsePart = parts[1].split(': ');

    var category = typePart[0].toLowerCase();
    var description = typePart[1];
    var response = responsePart[1];

    var key = description.replace(/\s+/g, '_').replace(/[^\w_]/g, '').toLowerCase();

    if (category === 'questions') {
      if (!output.questions[key]) {
        output.questions[key] = { question: description, responses: [] };
      }
      output.questions[key].responses.push(response);
    }

    if (category === 'orders') {
      if (!output.orders[key]) {
        output.orders[key] = { order: description, responses: [] };
      }
      output.orders[key].responses.push(response);
    }

    if (category === 'affirmations') {
      if (!output.affirmations[key]) {
        output.affirmations[key] = { affirmation: description, responses: [] };
      }
      output.affirmations[key].responses.push(response);
    }
  }

  return output;
}
