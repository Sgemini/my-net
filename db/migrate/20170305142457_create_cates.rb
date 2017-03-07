class CreateCates < ActiveRecord::Migration
  def change
    create_table :cates do |t|
      t.string :title
      t.text :body

      t.timestamps null: false
    end
  end
end
