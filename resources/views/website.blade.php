<!-- Compiled styles -->
<link rel="stylesheet" href="{{ mix('/css/style.css', '/assets/website/') }}" />

<!-- Compiled scripts -->
{{-- without mix.extract() --}}
<script src="{{mix('js/global.js', '/assets/website')}}"></script>
{{-- with mix.extract() --}}
{{-- <script src="{{ mix('js/manifest.js', '/assets/website') }}"></script> --}}
{{-- <script src="{{ mix('js/vendor.js', '/assets/website') }}"></script> --}}
{{-- <script src="{{ mix('js/app.js', '/assets/website') }}"></script> --}}