class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :vote_count
      t.references :cate
      t.references :article

      t.timestamps
    end
  end
end
