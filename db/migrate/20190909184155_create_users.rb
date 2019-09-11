class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false, presence: true
      t.string :last_name, null: false, presence: true
      t.string :email, null: false, presence: true
      t.string :password_digest, null: false, presence: true
      t.string :session_token, null: false, presence: true
      t.integer :instructor_id
      t.timestamps
    end
    add_index :users, :first_name
    add_index :users, :last_name
    add_index :users, :email, unique: true
  end
end
