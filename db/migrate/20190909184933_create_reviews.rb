class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false, presence: true
      t.text :body, null: false, presence: true
      t.integer :rating, null: false, presence: true
      t.integer :author_id, null: false, presence: true
      t.integer :course_id, null: false, presence: true
      t.timestamps
    end
  end
end
