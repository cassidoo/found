<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
$('#yourButtonId').click(function() {
  $.ajax({
  type: "POST",
  url: "https://mandrillapp.com/api/1.0/messages/send.json”,
  data: {
    'key': 'xqVOxJi9EcJE0yTYRrtPw',
    'message': {
      'from_email': 'ijoosong@gmail.com',
      'to': [
          {
            'email': 'cassidoo@gmail.com',
            'name': 'Cassidy Williams',
            'type': 'to'
          },
        ],
      'autotext': 'true',
      'subject': 'Your Loved One Found!',
      'html': 'Hi Cassidy Williams!  We have exciting news for you.  It seems that we located your loved one!'
    }
  }
 }).done(function(response) {
   console.log(response); // if you're into that sorta thing
  });
});