tinymce.init({
    selector: 'textarea',
    height: 300,
    menubar: true,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor autosave',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount',
  ],
  mobile: { 
    theme: 'mobile' 
  },
  toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
 });