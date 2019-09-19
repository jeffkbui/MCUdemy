@lectures.each do |lecture|
  json.set! lecture.id do
    json.partial! 'lecture', lecture: lecture
  end
end