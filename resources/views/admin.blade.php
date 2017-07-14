<!-- Compiled styles -->
<link rel="stylesheet" href="{{ mix('/css/style.css', '/assets/admin/') }}" />

<!-- Compiled scripts -->
{{-- without mix.extract() --}}
<script src="{{mix('js/global.js', '/assets/admin')}}"></script>
{{-- with mix.extract() --}}
{{-- <script src="{{ mix('js/manifest.js', '/assets/admin') }}"></script> --}}
{{-- <script src="{{ mix('js/vendor.js', '/assets/admin') }}"></script> --}}
{{-- <script src="{{ mix('js/app.js', '/assets/admin') }}"></script> --}}