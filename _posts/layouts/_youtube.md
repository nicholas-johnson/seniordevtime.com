- id = locals[:id]

%div.video-container
%iframe{
:src => "https://www.youtube.com/embed/" + id,
:frameborder => "0",
:allow => "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
:allowfullscreen => true
}