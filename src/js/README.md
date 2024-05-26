# Реалізація доступу до бази даних

		from flask import Flask, request, jsonify
	from flask_sqlalchemy import SQLAlchemy

	app = Flask(__name__)
	app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Koftatfok@localhost/quiz'
	db = SQLAlchemy(app)

	class State(db.Model):
	    id = db.Column(db.Integer, primary_key=True)
	    name = db.Column(db.String(32), nullable=False)

	    def __init__(self, id, name):
	        self.id = id
	        self.name = name

	@app.route('/states', methods=['GET'])
	def get_states():
	    states = State.query.all()
	    result = [{'id': state.id, 'state': state.name} for state in states]
	    return jsonify(result)

	@app.route('/states', methods=['POST'])
	def create_state():
	    data = request.get_json()
	    id = data.get('id')
	    name = data.get('state')

	    if not id or not name:
	        return jsonify({'error': 'Ідентифікатор та стан обов`язкові'}), 400

	    existing_state = State.query.filter_by(id=id).first()
	    if existing_state:
	        return jsonify({'error': f'Стан з ідентифікатором {id} вже існує'}), 409

	    existing_state = State.query.filter_by(name=name).first()
	    if existing_state:
	        return jsonify({'error': f'Стан  {name} вже існує'}), 409

	    new_state = State(id=id, name=name)
	    db.session.add(new_state)
	    db.session.commit()

	    return jsonify({'message': f'Стан {name} з ідентифікатором {id}  створено успішно'}), 201

	@app.route('/states/<int:id>', methods=['PUT'])
	def update_state(id):
	    state = State.query.get(id)

	    if not state:
	        return jsonify({'error': f'Стан з ідентифікатором {id} не знайдено'}), 404

	    data = request.get_json()
	    name = data.get('state')

	    if not name:
	        return jsonify({'error': 'Стан обов`язковий'}), 400

	    existing_state = State.query.filter(State.name == name, State.id != id).first()
	    if existing_state:
	        return jsonify({'error': f'Стан {name} вже існує'}), 409

	    state.name = name
	    db.session.commit()

	    return jsonify({'message': f'Стан з ідентифікатором {id} оновлено успішно, по новому - {name}'})

	@app.route('/states/<int:id>', methods=['DELETE'])
	def delete_state(id):
	    state = State.query.get(id)

	    if not state:
	        return jsonify({'error': f'Стан з ідентифікатором {id} не знайдено'}), 404
	    state_name = state.name

	    db.session.delete(state)
	    db.session.commit()
	    return jsonify({'message': f'Стан {state_name} з ідентифікатором {id} видалено успішно'})

	if __name__ == '__main__':
	    app.run(debug=True)
