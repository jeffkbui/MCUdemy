class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :owner_id, null: false, presence: true
      t.timestamps
    end
  end
end
