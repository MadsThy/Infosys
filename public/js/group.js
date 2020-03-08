var group_object = {
  setup: function() {
    function getGroupId(self) {
      var row = self.closest('tr');

      return row.find('td.group-id').text();
    }
    
    function getGroupCanelled(self) {
      var row = self.closest('tr');

      text = row.find('td.group-cancelled').text().toLowerCase();
      return text.match(/ja/) !== null ? true : false;
    }

    function updateCancelled(self, cancelled){
      var row = self.closest('tr');
      row.find('td.group-cancelled').html(cancelled ? "Ja" : "Nej");
      row.find('td button').html(cancelled ? "Genaktivér" : "Aflys");
      if (cancelled) {
        row.addClass("cancelled");
      } else {
        row.removeClass("cancelled");
      }
    }

    $('#deltager_showall').on('click', 'button.action_cancel_group', function() {
      var self          = $(this),
          group_id      = getGroupId(self),
          group_cancelled  = getGroupCanelled(self)
          
          $.ajax({
            url: '/hold/ajaxcancelgroup/' + group_id + '/' + !group_cancelled,
            type: 'get',
            success: function(data) {
                updateCancelled(self, data.cancelled === "true");
            },
            error: function(jqXHR) {
                alert('Kunne ikke rette hold');
            }
        });

    });
  }
}

group_object.setup();