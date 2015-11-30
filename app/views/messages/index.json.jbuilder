json.messages @messages do |message|
  json.(message, :id, :text, :created_at)
  json.user(message.user, :id, :email)
end
