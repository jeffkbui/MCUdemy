class AddYoutubeLinks < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :youtube_code, :string, presence: true
  end
end
