%form{"accept-charset" => "UTF-8", :action => "https://www.aweber.com/scripts/addlead.pl", :method => "post"}

%input{:name => "meta_web_form_id", :type => "hidden", :value => "1920093784"}
%input{:name => "meta_split_id", :type => "hidden", :value => ""}
%input{:name => "listname", :type => "hidden", :value => "awlist4202722"}
%input#redirect_9e859fd978db0d25324aae5af0b6f73f{:name => "redirect", :type => "hidden", :value => ""}
%input{:name => "meta_adtracking", :type => "hidden", :value => "nicholasjohnson.com_email_signup"}
%input{:name => "meta_message", :type => "hidden", :value => "1"}
%input{:name => "meta_required", :type => "hidden", :value => "name,email"}
%input{:name => "meta_tooltip", :type => "hidden", :value => ""}

.name
%label.previewLabel{:for => "awf_field-80954462"} Name:
%input#awf_field-80954462{:name => "name", :type => "text", :value => ""}

.email
%label.previewLabel{:for => "awf_field-80954463"} Email:
%input#awf_field-80954463{:name => "email", :type => "text", :value => ""}
.go
%button Sign Up Now!


%p.privacy
%em
We totally respect your
%a{:href => "https://www.aweber.com/permission.htm", :rel => "nofollow", :target => "_blank", :title => "Privacy Policy"} email privacy

%div.pixel{:style => "display: none;"}
%img{:alt => "", :src => "https://forms.aweber.com/form/displays.htm?id=jJxMDAyczOwcLA=="}

:javascript
document.getElementById('redirect_9e859fd978db0d25324aae5af0b6f73f').value = document.location;
