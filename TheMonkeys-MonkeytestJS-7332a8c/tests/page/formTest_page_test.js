registerTest ('The form cannot be submitted if any of the required fields are empty',
  {
      setup:function (container) {
          // this is run before the test
          // use it to do things like clear cookies or assign helpers
          this.form = getElementById('formTest');
          this.inputs = form.getElementsByTagName('input');
          
          this.blankForm = function(){
            for (var i = inputs.length - 1; i >= 0; i--) {
              inputs[i].value = ''
            };  
          };
      }
      ,load : function () {
          // this is the test script
          this.blankForm();
          this.test('Blank Form', function($) {
            ok(!form.submit, 'Form should not submit blank')
          });
      }
  }
);
registerTest ('The form cannot be submitted if the enquiry type is "Product complaint" and product name, product size, use-by date and batch code are empty.',
  {
      setup:function (container) {
          // this is run before the test
          // use it to do things like clear cookies or assign helpers
          this.trigerProductComplaint = function(){
            var enquiryType = $('#formTest #enquiryType');
            enquiryType.options.selectedIndex = 2;
            enquiryType.trigger('onblur');
          }
      ,load : function () {
          // this is the test script
          this.trigerProductComplaint();
          this.test('Blank Form with enquiry type == product complaint', function($) {
            ok(!form.submit, 'Form should not submit blank')
          });
      }
  }
);