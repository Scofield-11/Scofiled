This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
public/
  favicon.svg
  icons.svg
  icons8-crab-16.png
  scofield.ico
  sea_15651557.ico
src/
  api/
    axiosConfig.js
  assets/
    hero.png
    react.svg
    vite.svg
  components/
    AddVocabularyForm.jsx
    Breadcrumbs.jsx
    Dashboard.jsx
    EditVocabularyModal.jsx
    EmptyState.jsx
    ExamEditForm.jsx
    ExamHistoryTable.jsx
    ExamImportModal.jsx
    ExamList.jsx
    ExamMode.jsx
    ExamSaveModal.jsx
    ExamTaking.jsx
    Flashcard.jsx
    FlashcardMode.jsx
    LearnMode.jsx
    LoadingSkeleton.jsx
    MatchMode.jsx
    Navbar.jsx
    TestMode.jsx
    TestResult.jsx
    TestSetup.jsx
    VocabularyList.jsx
  context/
    VocabContext.jsx
  pages/
    HomePage.jsx
    NotFound.jsx
  App.css
  App.jsx
  index.css
  index.js
  main.jsx
.gitignore
.oxlintrc.json
index.html
package.json
README.md
vite.config.js
````

# Files

## File: public/favicon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
````

## File: public/icons.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
````

## File: src/api/axiosConfig.js
````javascript
import axios from "axios";

const api = axios.create({
  baseURL: "", // <-- Phải để trống như thế này
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
````

## File: src/assets/react.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## File: src/assets/vite.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
````

## File: src/components/AddVocabularyForm.jsx
````javascript
import React, { useState, useRef, useEffect } from 'react';
import api from '../api/axiosConfig';
import { toast } from 'react-toastify';

function AddVocabularyForm({ onAddSuccess, existingFolders = [], currentPath = "" }) {
  const [title, setTitle] = useState('');
  const [folderPath, setFolderPath] = useState(currentPath); 
  const [bulkText, setBulkText] = useState('');
  const [csvFile, setCsvFile] = useState(null);
  const [importMode, setImportMode] = useState('text'); 
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // Tự động chọn thư mục đích là thư mục người dùng đang đứng xem
  useEffect(() => {
    setFolderPath(currentPath);
  }, [currentPath]);

  const handleBulkImport = async () => {
    if (!title.trim()) return toast.warning("Vui lòng nhập tên học phần!");
    if (importMode === 'text' && !bulkText.trim()) return toast.warning("Vui lòng nhập danh sách từ vựng!");
    if (importMode === 'csv' && !csvFile) return toast.warning("Vui lòng chọn file CSV!");

    setIsLoading(true);
    try {
      let response;
      if (importMode === 'text') {
        response = await api.post("/vocabularies/bulk-import", {
          title: title.trim(),
          raw_text: bulkText,
          folder_path: folderPath.trim() 
        });
      } else {
        const formData = new FormData();
        formData.append("title", title.trim());
        formData.append("folder_path", folderPath.trim()); 
        formData.append("file", csvFile);
        response = await api.post("/vocabularies/import-csv", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
      }
      
      toast.success(response.data.message);
      setTitle("");
      setBulkText("");
      setCsvFile(null);
      setIsExpanded(false);
      if (onAddSuccess) onAddSuccess(); 
    } catch (error) {
      toast.error(error.response?.data?.detail || "Có lỗi xảy ra, kiểm tra lại định dạng.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      if (files[0].name.endsWith('.csv')) setCsvFile(files[0]);
      else toast.error("Vui lòng chỉ tải lên file định dạng .csv");
    }
  };

  return (
    <div className="card shadow-sm mb-5 border-0 rounded-4">
      <div 
        className="card-header bg-white py-4 border-0 d-flex justify-content-between align-items-center rounded-4"
        style={{ cursor: 'pointer' }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h5 className="mb-0 fw-bold text-primary">
          {isExpanded ? '➖' : '➕'} Tạo học phần mới (Nhập nhanh)
        </h5>
      </div>
      
      {isExpanded && (
        <div className="card-body p-4 border-top">
          <input 
            type="text" 
            className="form-control form-control-lg mb-4 fw-bold text-dark bg-light border-0" 
            placeholder="Nhập tên học phần (VD: Bài 1 - Minna no Nihongo)..." 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ borderRadius: '12px' }}
          />

          <div className="mb-4 fade-in-slide">
            <label className="text-muted small fw-bold mb-2">LƯU VÀO THƯ MỤC</label>
            <div className="input-group input-group-lg shadow-sm rounded-4">
              <span className="input-group-text bg-light border-0" style={{ borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}>📁</span>
              <select 
                className="form-select bg-light border-0 fw-bold text-dark"
                value={folderPath}
                onChange={(e) => setFolderPath(e.target.value)}
                style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}
              >
                <option value="">-- Thư mục gốc (Mặc định) --</option>
                {existingFolders.map(folder => (
                  <option key={folder} value={folder}>{folder}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-3 d-flex gap-3 fade-in-slide">
            <button className={`btn fw-bold ${importMode === 'text' ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setImportMode('text')}>Dán văn bản</button>
            <button className={`btn fw-bold ${importMode === 'csv' ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setImportMode('csv')}>Tải lên file CSV</button>
          </div>

          {importMode === 'text' ? (
            <div className="mb-4 fade-in-slide">
              <label className="text-muted small fw-bold mb-2">DANH SÁCH TỪ VỰNG (Từ vựng | Phiên âm | Ý nghĩa)</label>
              <textarea 
                className="form-control bg-light border-0 p-3" 
                rows="6" 
                placeholder="守ります | まもります | Bảo vệ, tuân thủ&#10;外します | はずします | Rời, không có ở&#10;Cái bàn | | Desk (Không có phiên âm cũng được)"
                value={bulkText} onChange={(e) => setBulkText(e.target.value)}
                style={{ resize: 'none', borderRadius: '12px', lineHeight: '1.6' }}
              ></textarea>
            </div>
          ) : (
            <div className="mb-4 fade-in-slide">
              <label className="text-muted small fw-bold mb-2">CHỌN FILE CSV (Cột 1: Từ vựng, Cột 2: Phiên âm, Cột 3: Ý nghĩa)</label>
              <div 
                className={`d-flex flex-column align-items-center justify-content-center p-5 rounded-4 transition-all ${isDragging ? 'bg-primary text-white border-primary' : 'bg-light text-muted'}`}
                style={{ border: `2px dashed ${isDragging ? 'var(--bs-primary)' : '#ccc'}`, cursor: 'pointer', minHeight: '200px' }}
                onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()}
              >
                <span className="fs-1 mb-2">{csvFile ? '📄' : '📥'}</span>
                <span className="fw-bold fs-5 mb-1">{csvFile ? csvFile.name : 'Kéo thả file CSV vào đây'}</span>
                <span className="small opacity-75">hoặc click để duyệt file</span>
                <input type="file" ref={fileInputRef} className="d-none" accept=".csv" onChange={(e) => { if (e.target.files && e.target.files.length > 0) setCsvFile(e.target.files[0]); }} />
              </div>
            </div>
          )}

          <div className="d-flex justify-content-end">
            <button className="btn btn-primary px-5 py-2 fw-bold" onClick={handleBulkImport} disabled={isLoading} style={{ borderRadius: '10px' }}>
              {isLoading ? 'Đang xử lý...' : 'Tạo học phần'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddVocabularyForm;
````

## File: src/components/Breadcrumbs.jsx
````javascript
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  
  // Ánh xạ đường dẫn sang tên trang
  const routeNames = {
    '/': 'Quản lý Thư viện',
    '/flashcards': 'Ôn tập Flashcards',
    '/learn': 'Chế độ Học (SRS)',
    '/test': 'Kiểm tra năng lực',
    '/match': 'Trò chơi Ghép thẻ',
    '/exam': 'Thi trắc nghiệm tổng hợp'
  };

  const currentTitle = routeNames[location.pathname];
  
  // Ẩn breadcrumb nếu ở trang 404
  if (!currentTitle) return null; 

  return (
    <nav aria-label="breadcrumb" className="mb-4 d-none d-lg-block fade-in-slide print-d-none">
      <ol className="breadcrumb bg-white px-4 py-3 rounded-4 shadow-sm mb-0">
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none fw-bold text-muted">
            🏠 Trang chủ
          </Link>
        </li>
        {location.pathname !== '/' && (
          <li className="breadcrumb-item active fw-bold text-primary" aria-current="page">
            {currentTitle}
          </li>
        )}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
````

## File: src/components/Dashboard.jsx
````javascript
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { VocabContext } from '../context/VocabContext';
import LoadingSkeleton from './LoadingSkeleton';

function Dashboard() {
  const { sets, allVocabs, loading, fetchSets, fetchAllVocabs } = useContext(VocabContext);

  useEffect(() => {
    fetchSets();
    fetchAllVocabs();
  }, [fetchSets, fetchAllVocabs]);

  if (loading) return <LoadingSkeleton />;

  return (
    <div className="container-fluid mt-2 mb-4 mx-auto" style={{ maxWidth: '1000px' }}>
      <div className="row g-4 fade-in-slide align-items-stretch">
        
        {/* Banner Chính */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-4 bg-primary text-white h-100 position-relative overflow-hidden p-3">
            <div className="card-body p-4 position-relative" style={{ zIndex: 2 }}>
              <h3 className="fw-bold mb-2 display-6">Chào mừng trở lại! 🚀</h3>
              <p className="opacity-75 mb-5 fs-5">Hôm nay bạn muốn ôn tập chủ đề gì?</p>
              
              <div className="d-flex gap-5 mt-auto">
                <div>
                  <h1 className="fw-bold mb-0 display-4">{sets.length}</h1>
                  <span className="fw-bold opacity-75 fs-5">Học phần</span>
                </div>
                <div>
                  <h1 className="fw-bold mb-0 display-4">{allVocabs.length}</h1>
                  <span className="fw-bold opacity-75 fs-5">Từ vựng</span>
                </div>
              </div>
            </div>
            {/* Vòng tròn trang trí */}
            <div className="position-absolute" style={{ top: '-30%', right: '-10%', width: '350px', height: '350px', background: 'rgba(255,255,255,0.08)', borderRadius: '50%', zIndex: 1 }}></div>
            <div className="position-absolute" style={{ bottom: '-20%', right: '15%', width: '150px', height: '150px', background: 'rgba(255,255,255,0.12)', borderRadius: '50%', zIndex: 1 }}></div>
          </div>
        </div>

        {/* Lối tắt (Shortcuts) */}
        <div className="col-lg-4">
          <div className="d-flex flex-column gap-4 h-100">
            <Link to="/flashcards" className="card flex-grow-1 shadow-sm border-0 rounded-4 bg-white text-decoration-none text-dark transition-all hover-bg-light">
              <div className="card-body d-flex align-items-center justify-content-center gap-3">
                <span className="display-6">🗂️</span>
                <h4 className="fw-bold mb-0 text-primary">Flashcards</h4>
              </div>
            </Link>
            
            <Link to="/match" className="card flex-grow-1 shadow-sm border-0 rounded-4 bg-white text-decoration-none text-dark transition-all hover-bg-light">
              <div className="card-body d-flex align-items-center justify-content-center gap-3">
                <span className="display-6">🎮</span>
                <h4 className="fw-bold mb-0 text-success">Ghép thẻ</h4>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
````

## File: src/components/EditVocabularyModal.jsx
````javascript
import { useState } from "react";
import api from "../api/axiosConfig";

function EditVocabularyModal({ vocab, onClose, onUpdateSuccess }) {
  const [word, setWord] = useState(vocab.word);
  const [meaning, setMeaning] = useState(vocab.meaning);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!word.trim() || !meaning.trim()) {
      setError("Vui lòng nhập đầy đủ từ vựng và ý nghĩa");
      return;
    }

    try {
      setSaving(true);
      const res = await api.put(`/vocabularies/${vocab.id}`, {
        word: word.trim(),
        meaning: meaning.trim(),
      });
      onUpdateSuccess(res.data);
    } catch (err) {
      setError("Có lỗi xảy ra khi lưu thay đổi");
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sửa từ vựng</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSave}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Từ vựng</label>
                <input
                  type="text"
                  className="form-control"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Ý nghĩa</label>
                <input
                  type="text"
                  className="form-control"
                  value={meaning}
                  onChange={(e) => setMeaning(e.target.value)}
                />
              </div>
              {error && <p className="text-danger">{error}</p>}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Hủy
              </button>
              <button type="submit" className="btn btn-primary" disabled={saving}>
                {saving ? "Đang lưu..." : "Lưu thay đổi"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditVocabularyModal;
````

## File: src/components/EmptyState.jsx
````javascript
import React from 'react';

function EmptyState({ title = "Chưa có dữ liệu", message = "Hãy thêm mới dữ liệu để bắt đầu nhé!" }) {
  return (
    <div className="text-center py-5">
      <svg 
        width="100" 
        height="100" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#863bff" 
        strokeWidth="1.2"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="mb-4 opacity-75"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
      <h4 className="fw-bold text-dark">{title}</h4>
      <p className="text-muted">{message}</p>
    </div>
  );
}

export default EmptyState;
````

## File: src/components/ExamEditForm.jsx
````javascript
import React from 'react';

function ExamEditForm({ editTitle, setEditTitle, editQuestions, handleDeleteQuestion, handleUpdateQuestion, handleAddNewQuestionToEdit, setShowImportModal, handleSaveEdit, setEditingExamId }) {
  return (
    <div className="card shadow border-warning mb-5">
      <div className="card-header bg-warning text-dark fw-bold d-flex justify-content-between align-items-center">
        <span className="fs-5">Chỉnh sửa bài thi (Tổng: {editQuestions.length} câu)</span>
        <button className="btn btn-sm btn-dark" onClick={() => setEditingExamId(null)}>Đóng lại</button>
      </div>
      <div className="card-body bg-light">
        <input className="form-control form-control-lg mb-4 fw-bold text-primary" placeholder="Tên bài thi..." value={editTitle} onChange={e => setEditTitle(e.target.value)} />
        {editQuestions.map((q, idx) => (
          <div key={idx} className="card mb-3 border-secondary shadow-sm" style={{ transform: 'none' }}>
            <div className="card-header bg-white d-flex justify-content-between py-2">
              <span className="fw-bold">Câu {idx + 1}</span>
              <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteQuestion(idx)}>Xóa câu này</button>
            </div>
            <div className="card-body">
              <input className="form-control mb-3" placeholder="Nội dung câu hỏi..." value={q.question} onChange={e => handleUpdateQuestion(idx, 'question', e.target.value)} />
              <div className="row g-2 mb-3">
                {[0, 1, 2, 3].map(optIdx => (
                  <div className="col-md-6" key={optIdx}>
                    <div className="input-group input-group-sm">
                      <span className="input-group-text fw-bold">Đ.án {optIdx + 1}</span>
                      <input className="form-control" value={q.options[optIdx]} onChange={e => handleUpdateQuestion(idx, `opt${optIdx + 1}`, e.target.value)} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex align-items-center">
                <label className="me-2 fw-bold text-success">Đáp án đúng nằm ở vị trí số:</label>
                <select className="form-select form-select-sm w-auto border-success" value={q.correct_ans} onChange={e => handleUpdateQuestion(idx, 'correct_ans', parseInt(e.target.value))}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
            </div>
          </div>
        ))}
        
        <div className="d-flex gap-2 mb-4">
          <button className="btn btn-outline-secondary flex-grow-1 border-dashed py-2" onClick={handleAddNewQuestionToEdit}>
            + Thêm 1 câu hỏi trống
          </button>
          <button className="btn btn-outline-primary flex-grow-1 border-dashed py-2 fw-bold" onClick={() => setShowImportModal(true)}>
            📥 Import thêm nhanh (Paste)
          </button>
        </div>

        <button className="btn btn-success btn-lg w-100 fw-bold" onClick={handleSaveEdit}>LƯU TẤT CẢ CẬP NHẬT</button>
      </div>
    </div>
  );
}

export default ExamEditForm;
````

## File: src/components/ExamHistoryTable.jsx
````javascript
import React from 'react';
import EmptyState from './EmptyState';

function ExamHistoryTable({ history, setViewHistory }) {
  return (
    <>
      <h4 className="mb-3 mt-5">Lịch sử làm bài</h4>
      {history.length === 0 ? (
        <EmptyState title="Chưa có dữ liệu" message="Lịch sử làm bài thi của bạn sẽ được hiển thị tại đây." />
      ) : (
        <div className="card shadow-sm border-0 mb-5">
          <div className="table-responsive">
            <table className="table table-hover mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th>Thời gian</th>
                  <th>Tên bài thi</th>
                  <th>Kết quả</th>
                  <th className="text-end">Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {history.map(record => (
                  <tr key={record.id}>
                    <td className="text-muted small">{record.date}</td>
                    <td className="fw-bold">{record.title}</td>
                    <td><span className={`badge ${record.score === record.total ? 'bg-success' : 'bg-primary'}`}>{record.score} / {record.total}</span></td>
                    <td className="text-end"><button className="btn btn-sm btn-outline-info" onClick={() => setViewHistory(record)}>Xem lại</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default ExamHistoryTable;
````

## File: src/components/ExamImportModal.jsx
````javascript
import React from 'react';

function ExamImportModal({ show, onClose, importText, setImportText, onImport }) {
  if (!show) return null;
  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050, padding: '10px' }}>
      <div className="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-md-down">
        <div className="modal-content shadow-lg border-0 h-100">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title fw-bold">📥 Import thêm hàng loạt</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body bg-light">
            <p className="text-muted small mb-2">
              Dán danh sách câu hỏi theo định dạng: <br/>
              <code>Câu hỏi | Đáp án 1 | Đáp án 2 | Đáp án 3 | Đáp án 4 | Vị trí đúng</code>
            </p>
            <textarea 
              className="form-control mb-3" 
              rows="8" 
              placeholder="Câu hỏi 1 | A | B | C | D | 1&#10;Câu hỏi 2 | A | B | C | D | 3"
              value={importText} 
              onChange={e => setImportText(e.target.value)}
            ></textarea>
            <button className="btn btn-success w-100 fw-bold btn-lg" onClick={onImport}>Gộp vào đề này</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamImportModal;
````

## File: src/components/ExamList.jsx
````javascript
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../api/axiosConfig';
import EmptyState from './EmptyState';

function ExamList({ exams, fetchExamsList, startExam, handleEditClick, handleDeleteExam, isInstantFeedback, setIsInstantFeedback }) {
  const [rawText, setRawText] = useState("");
  const [title, setTitle] = useState("");

  const handleCreate = async () => {
    if (!title.trim() || !rawText.trim()) return toast.warning("Vui lòng nhập đủ tên và nội dung bài test!");
    try {
      await api.post("/exams/import", { title, raw_text: rawText });
      toast.success("Tạo bài test thành công!");
      setRawText("");
      setTitle("");
      fetchExamsList();
    } catch (error) {
      toast.error("Lỗi import. Vui lòng kiểm tra lại định dạng dấu |");
    }
  };

  return (
    <>
      <div className="card shadow-sm p-4 mb-5 border-0" style={{ transform: 'none' }}>
        <h3 className="mb-3">Tạo bài kiểm tra mới (Dán nhanh)</h3>
        <input className="form-control mb-2" placeholder="Tên bài kiểm tra..." value={title} onChange={e => setTitle(e.target.value)} />
        <textarea className="form-control mb-3" rows="3" placeholder="Câu hỏi | Đáp án 1 | Đáp án 2 | Đáp án 3 | Đáp án 4 | 1" value={rawText} onChange={e => setRawText(e.target.value)}></textarea>
        <button className="btn btn-primary w-100" onClick={handleCreate}>Lưu Đề Thi Mới</button>
      </div>

      <h4 className="mb-3">Danh sách bài kiểm tra</h4>
      {exams.length === 0 ? (
        <EmptyState title="Chưa có bài kiểm tra" message="Hãy tạo bài kiểm tra mới bằng cách điền thông tin phía trên nhé." />
      ) : (
      <div className="row mb-5">
        {exams.map(exam => (
          <div className="col-md-6 mb-3" key={exam.id}>
            <div className="card shadow-sm border-0 h-100" style={{ transform: 'none' }}>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-primary">{exam.title}</h5>
                <div>
                  <div className="d-flex gap-2 mt-3">
                    <button className="btn btn-outline-primary flex-grow-1" onClick={() => startExam(exam.id)}>Làm bài</button>
                    <button className="btn btn-outline-secondary" onClick={() => handleEditClick(exam.id)}>Sửa</button>
                    <button className="btn btn-outline-danger" onClick={() => handleDeleteExam(exam.id)}>Xóa</button>
                  </div>
                  <div className="form-check form-switch mt-3">
                    <input className="form-check-input" type="checkbox" id={`switch-${exam.id}`} checked={isInstantFeedback} onChange={() => setIsInstantFeedback(!isInstantFeedback)} />
                    <label className="form-check-label text-primary" htmlFor={`switch-${exam.id}`} style={{fontSize: '0.9rem'}}>Hiện đáp án ngay khi chọn</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </>
  );
}

export default ExamList;
````

## File: src/components/ExamMode.jsx
````javascript
import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import { toast } from 'react-toastify';
import ExamList from './ExamList';
import ExamTaking from './ExamTaking';
import LoadingSkeleton from './LoadingSkeleton';
import ExamImportModal from './ExamImportModal';
import ExamSaveModal from './ExamSaveModal';
import ExamEditForm from './ExamEditForm';
import ExamHistoryTable from './ExamHistoryTable';

function ExamMode() {
  const [editingExamId, setEditingExamId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editQuestions, setEditQuestions] = useState([]);

  const [exams, setExams] = useState([]);
  const [examData, setExamData] = useState(null);
  const [isInstantFeedback, setIsInstantFeedback] = useState(false);

  const [history, setHistory] = useState([]);
  const [viewHistory, setViewHistory] = useState(null); 

  const [showSaveModal, setShowSaveModal] = useState(false);
  const [questionToSave, setQuestionToSave] = useState(null);
  const [newSaveTitle, setNewSaveTitle] = useState("");

  const [showImportModal, setShowImportModal] = useState(false);
  const [importText, setImportText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const res = await api.get("/exams/history/all");
      setHistory(res.data);
    } catch (error) {
      console.error("Lỗi lấy lịch sử:", error);
    }
  };

  const fetchExamsList = async () => {
    try {
      const res = await api.get("/exams");
      setExams(res.data);
    } catch (error) {
      console.error("Lỗi lấy danh sách đề thi:", error);
    }
  };

  useEffect(() => {
    Promise.all([fetchExamsList(), fetchHistory()]).finally(() => setIsLoading(false));
  }, []);

  const handleEditClick = async (examId) => {
    try {
      const res = await api.get(`/exams/${examId}`);
      const data = res.data;
      setEditTitle(data.title);
      
      const formattedQuestions = data.questions.map(q => ({
        question: q.question,
        options: [...q.options],
        correct_ans: q.correct_ans
      }));
      
      setEditQuestions(formattedQuestions);
      setEditingExamId(examId);
      window.scrollTo(0, 0);
    } catch (error) {
      toast.error("Lỗi lấy dữ liệu bài thi");
    }
  };

  const handleUpdateQuestion = (index, field, value) => {
    const updated = [...editQuestions];
    if (field.startsWith('opt')) {
      const optIndex = parseInt(field.replace('opt', '')) - 1;
      updated[index].options[optIndex] = value;
    } else {
      updated[index][field] = value;
    }
    setEditQuestions(updated);
  };

  const handleDeleteQuestion = (index) => {
    const updated = editQuestions.filter((_, i) => i !== index);
    setEditQuestions(updated);
  };

  const handleAddNewQuestionToEdit = () => {
    setEditQuestions([...editQuestions, { question: "", options: ["", "", "", ""], correct_ans: 1 }]);
  };

  const handleImportToEdit = () => {
    if (!importText.trim()) return toast.warning("Vui lòng nhập nội dung!");
    
    const lines = importText.trim().split('\n');
    const newQuestions = [];
    let errorCount = 0;

    for (let line of lines) {
      if (!line.trim()) continue;
      const parts = line.split('|').map(p => p.trim());
      if (parts.length === 6) {
        newQuestions.push({
          question: parts[0],
          options: [parts[1], parts[2], parts[3], parts[4]],
          correct_ans: parseInt(parts[5]) || 1
        });
      } else {
        errorCount++;
      }
    }
    
    if (newQuestions.length > 0) {
      setEditQuestions([...editQuestions, ...newQuestions]);
      toast.success(`Đã gộp thêm ${newQuestions.length} câu vào đề. Có ${errorCount} dòng bị lỗi bị bỏ qua.`);
      setImportText("");
      setShowImportModal(false);
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
    } else {
      toast.error("Không tìm thấy câu hỏi hợp lệ. Vui lòng kiểm tra định dạng |");
    }
  };

  const handleSaveEdit = async () => {
    if (!editTitle.trim()) return toast.warning("Tên bài thi không được để trống!");
    const raw = editQuestions.map(q => `${q.question} | ${q.options[0]} | ${q.options[1]} | ${q.options[2]} | ${q.options[3]} | ${q.correct_ans}`).join('\n');
    try {
      await api.put(`/exams/${editingExamId}`, { title: editTitle, raw_text: raw });
      toast.success("Cập nhật bài test thành công!");
      setEditingExamId(null);
      fetchExamsList();
    } catch (error) {
      toast.error("Lỗi lưu dữ liệu. Vui lòng kiểm tra lại thông tin nhập");
    }
  };

  const handleDeleteExam = async (examId) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa bài kiểm tra này?")) return;
    try {
      await api.delete(`/exams/${examId}`);
      fetchExamsList();
      fetchHistory(); 
    } catch (error) {
      toast.error("Lỗi khi xóa bài thi");
    }
  };

  const startExam = async (examId) => {
    try {
      const res = await api.get(`/exams/${examId}`);
      setExamData(res.data);
    } catch (error) {
      console.error("Lỗi lấy chi tiết đề thi:", error);
    }
  };

  const backToList = () => {
    setExamData(null);
    fetchExamsList(); // Refresh list when going back
  };

  const openSaveModal = (q) => {
    setQuestionToSave(q);
    setShowSaveModal(true);
  };

  const closeSaveModal = () => {
    setShowSaveModal(false);
    setQuestionToSave(null);
    setNewSaveTitle("");
  };

  const saveToExisting = async (exam) => {
    try {
      const res = await api.get(`/exams/${exam.id}`);
      const existingData = res.data;
      
      const isExist = existingData.questions.some(eq => eq.question === questionToSave.question);
      if (isExist) {
        toast.warning(`Câu hỏi này đã có trong bộ [${exam.title}]!`);
        return;
      }
      
      const existingRaw = existingData.questions.map(eq => 
        `${eq.question} | ${eq.options[0]} | ${eq.options[1]} | ${eq.options[2]} | ${eq.options[3]} | ${eq.correct_ans}`
      ).join('\n');
      
      const rawLine = `${questionToSave.question} | ${questionToSave.options[0]} | ${questionToSave.options[1]} | ${questionToSave.options[2]} | ${questionToSave.options[3]} | ${questionToSave.correct_ans}`;
      const newRawText = existingRaw ? existingRaw + '\n' + rawLine : rawLine;
      
      await api.put(`/exams/${exam.id}`, { 
        title: exam.title, 
        raw_text: newRawText 
      });
      toast.success(`Đã lưu câu hỏi vào [${exam.title}]`);
      closeSaveModal();
    } catch (error) {
      toast.error("Lỗi khi lưu câu hỏi!");
    }
  };

  const saveToNew = async () => {
    if (!newSaveTitle.trim()) return toast.warning("Vui lòng nhập tên đề thi mới!");
    try {
      const rawLine = `${questionToSave.question} | ${questionToSave.options[0]} | ${questionToSave.options[1]} | ${questionToSave.options[2]} | ${questionToSave.options[3]} | ${questionToSave.correct_ans}`;
      await api.post("/exams/import", { 
        title: newSaveTitle.trim(), 
        raw_text: rawLine 
      });
      toast.success(`Đã tạo [${newSaveTitle.trim()}] và lưu câu hỏi thành công!`);
      fetchExamsList();
      closeSaveModal();
    } catch (error) {
      toast.error("Lỗi khi tạo và lưu đề mới!");
    }
  };

  if (isLoading) return <LoadingSkeleton />;

  if (viewHistory) {
    return (
      <div className="container mt-4" style={{ maxWidth: '800px' }}>
        <ExamSaveModal show={showSaveModal} onClose={closeSaveModal} newSaveTitle={newSaveTitle} setNewSaveTitle={setNewSaveTitle} saveToNew={saveToNew} saveToExisting={saveToExisting} exams={exams} />
        <button className="btn btn-secondary mb-4" onClick={() => setViewHistory(null)}>← Quay lại danh sách</button>
        <div className="alert alert-info shadow-sm border-0 mb-4">
          <h4 className="fw-bold">{viewHistory.title}</h4>
          <p className="mb-0 text-dark">
            Ngày làm: <strong>{viewHistory.date}</strong> <br/>
            Kết quả: <strong className="text-primary fs-5">{viewHistory.score} / {viewHistory.total}</strong>
          </p>
        </div>
        
        {viewHistory.wrongDetails && viewHistory.wrongDetails.length === 0 ? (
          <div className="alert alert-success fw-bold">Tuyệt vời! Bạn không làm sai câu nào trong phiên này.</div>
        ) : (
          <div>
            <h5 className="text-danger fw-bold mb-3">Các câu làm sai:</h5>
            {viewHistory.wrongDetails && viewHistory.wrongDetails.map((q, i) => (
              <div key={i} className="bg-white rounded shadow-sm mb-4 p-4" style={{ transform: 'none' }}>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="mb-0 text-dark">Câu hỏi: {q.question}</h5>
                  <button className="btn btn-sm btn-outline-warning fw-bold text-dark ms-3 text-nowrap" onClick={() => openSaveModal(q)} title="Lưu câu hỏi này">
                    ⭐ Lưu
                  </button>
                </div>
                <div className="row">
                  {q.options ? q.options.map((opt, oIdx) => {
                    const optNumber = oIdx + 1;
                    let btnClass = "btn-outline-secondary";
                    if (optNumber === q.correct_ans) btnClass = "btn-success text-white border-success"; 
                    else if (q.user_ans === optNumber) btnClass = "btn-danger text-white border-danger";
                    return (
                      <div className="col-sm-6 mb-3" key={oIdx}>
                        <button className={`btn w-100 text-start py-2 ${btnClass}`} style={{ cursor: 'default' }}>{opt}</button>
                      </div>
                    );
                  }) : (
                    <p className="text-muted fst-italic">Dữ liệu lịch sử cũ không hỗ trợ xem. Vui lòng làm lại bài mới.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (examData) {
    return (
      <>
        <ExamSaveModal show={showSaveModal} onClose={closeSaveModal} newSaveTitle={newSaveTitle} setNewSaveTitle={setNewSaveTitle} saveToNew={saveToNew} saveToExisting={saveToExisting} exams={exams} />
        <ExamTaking
          examData={examData} 
          isInstantFeedback={isInstantFeedback} 
          backToList={backToList} 
          fetchHistory={fetchHistory} 
          openSaveModal={openSaveModal}
          startExam={startExam}
        />
      </>
    );
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '900px' }}>
      <ExamImportModal show={showImportModal} onClose={() => setShowImportModal(false)} importText={importText} setImportText={setImportText} onImport={handleImportToEdit} />
      
      {editingExamId ? (
        <ExamEditForm 
          editTitle={editTitle} setEditTitle={setEditTitle} editQuestions={editQuestions}
          handleDeleteQuestion={handleDeleteQuestion} handleUpdateQuestion={handleUpdateQuestion}
          handleAddNewQuestionToEdit={handleAddNewQuestionToEdit} setShowImportModal={setShowImportModal}
          handleSaveEdit={handleSaveEdit} setEditingExamId={setEditingExamId} 
        />
      ) : (
        <ExamList 
          exams={exams} fetchExamsList={fetchExamsList} startExam={startExam}
          handleEditClick={handleEditClick} handleDeleteExam={handleDeleteExam}
          isInstantFeedback={isInstantFeedback} setIsInstantFeedback={setIsInstantFeedback}
        />
      )}

      <ExamHistoryTable history={history} setViewHistory={setViewHistory} />
    </div>
  );
}

export default ExamMode;
````

## File: src/components/ExamSaveModal.jsx
````javascript
import React from 'react';

function ExamSaveModal({ show, onClose, newSaveTitle, setNewSaveTitle, saveToNew, saveToExisting, exams }) {
  if (!show) return null;
  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050, padding: '10px' }}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down">
        <div className="modal-content shadow-lg border-0">
          <div className="modal-header bg-warning text-dark">
            <h5 className="modal-title fw-bold">⭐ Lưu câu hỏi</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body bg-light">
            <div className="mb-4">
              <label className="fw-bold mb-2">Tạo bộ kiểm tra mới:</label>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Tên bài kiểm tra..." value={newSaveTitle} onChange={e => setNewSaveTitle(e.target.value)} />
                <button className="btn btn-success fw-bold text-nowrap" onClick={saveToNew}>Tạo & Lưu</button>
              </div>
            </div>
            <hr />
            <label className="fw-bold mb-2">Hoặc lưu vào bài có sẵn:</label>
            <div className="list-group shadow-sm" style={{ maxHeight: '40vh', overflowY: 'auto' }}>
              {exams.length === 0 ? (
                <div className="text-center py-3 text-muted">Chưa có bài kiểm tra nào.</div>
              ) : (
                exams.map(exam => (
                  <button key={exam.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={() => saveToExisting(exam)}>
                    <span className="text-truncate pe-3">{exam.title}</span>
                    <span className="badge bg-primary rounded-pill">+</span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamSaveModal;
````

## File: src/components/ExamTaking.jsx
````javascript
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../api/axiosConfig';
import confetti from 'canvas-confetti';

function ExamTaking({ examData, isInstantFeedback, backToList, fetchHistory, openSaveModal, startExam }) {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (qId, optIndex) => {
    if (isSubmitted) return;
    setAnswers({ ...answers, [qId]: optIndex });
  };

  const scrollToQuestion = (idx) => {
    const element = document.getElementById(`question-${idx}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    const wrongQs = examData.questions.filter(q => answers[q.id] !== q.correct_ans);
    const scoreCount = examData.questions.length - wrongQs.length;
    
    if (scoreCount / examData.questions.length >= 0.8) {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }
    
    const wrongDetails = wrongQs.map(q => ({
      question: q.question,
      options: [...q.options],
      correct_ans: q.correct_ans,
      user_ans: answers[q.id]
    }));

    try {
      await api.post(`/exams/${examData.id}/history`, {
        score: scoreCount,
        total: examData.questions.length,
        wrong_details: wrongDetails
      });
      fetchHistory(); 
    } catch (error) {
      toast.error("Lỗi lưu kết quả làm bài lên máy chủ");
    }
  };

  const handleCreateFromCurrentMistakes = async () => {
    const wrongQs = examData.questions.filter(q => answers[q.id] !== q.correct_ans);
    const newTitle = window.prompt("Vui lòng nhập tên cho đề ôn tập:", `Ôn tập câu sai - ${examData.title}`);
    if (!newTitle || !newTitle.trim()) return;

    const rawText = wrongQs.map(q => 
      `${q.question} | ${q.options[0]} | ${q.options[1]} | ${q.options[2]} | ${q.options[3]} | ${q.correct_ans}`
    ).join('\n');

    try {
      await api.post("/exams/import", { title: newTitle.trim(), raw_text: rawText });
      toast.success(`Đã tạo thành công đề thi: ${newTitle.trim()}`);
      backToList(); 
      window.scrollTo(0, 0);
    } catch (error) {
      toast.error("Lỗi khi tạo bài test ôn tập.");
    }
  };

  const wrongQuestions = examData.questions.filter(q => answers[q.id] !== q.correct_ans);
  const score = examData.questions.length - wrongQuestions.length;
  const totalQuestions = examData.questions.length;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="container mt-4" style={{ maxWidth: '1100px' }}>
      <button className="btn btn-secondary mb-4 d-print-none" onClick={backToList}>← Quay lại danh sách</button>
      
      <div className="row">
        <div className="col-lg-8 mb-4">
          <h3 className="mb-3">{examData.title}</h3>
          
          {!isSubmitted && (
            <div className="mb-4">
              <div className="d-flex justify-content-between text-muted fw-bold mb-2" style={{ fontSize: '0.9rem' }}>
                <span>Tiến độ làm bài: {answeredCount} / {totalQuestions} câu</span>
                <span>{Math.round((answeredCount / totalQuestions) * 100)}%</span>
              </div>
              <div className="progress shadow-sm" style={{ height: '8px' }}>
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}></div>
              </div>
            </div>
          )}

          {examData.questions.map((q, idx) => {
            const userAns = answers[q.id];
            const isAnswered = userAns !== undefined;
            const showResult = isSubmitted || (isInstantFeedback && isAnswered);

            return (
              <div id={`question-${idx}`} key={q.id} className="bg-white rounded shadow-sm mb-4 p-4 fade-in-slide" style={{ transform: 'none' }}>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="mb-0">Câu {idx + 1}: {q.question}</h5>
                  <button className="btn btn-sm btn-outline-warning fw-bold text-dark ms-3 text-nowrap d-print-none" onClick={() => openSaveModal(q)} title="Lưu câu hỏi này">⭐ Lưu</button>
                </div>
                <div className="row">
                  {q.options.map((opt, oIdx) => {
                    const optNumber = oIdx + 1;
                    let btnClass = "btn-outline-secondary";
                    if (showResult) {
                      if (optNumber === q.correct_ans) btnClass = "btn-success text-white border-success"; 
                      else if (userAns === optNumber && userAns !== q.correct_ans) btnClass = "btn-danger text-white border-danger";
                    } else if (userAns === optNumber) btnClass = "btn-primary"; 

                    return (
                      <div className="col-sm-6 mb-3" key={oIdx}>
                        <button className={`btn w-100 text-start py-2 ${btnClass}`} onClick={() => handleSelect(q.id, optNumber)}>{opt}</button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {!isSubmitted ? (
            <button className="btn btn-primary btn-lg w-100 mb-5 shadow-sm d-print-none" onClick={handleSubmit}>Nộp bài</button>
          ) : (
            <div className="alert alert-info mt-4 mb-5 shadow-sm border-0">
              <h4 className="fw-bold">Kết quả: {score} / {totalQuestions}</h4>
              {wrongQuestions.length > 0 && (
                <div className="mt-4">
                  <strong className="text-danger fs-5">Các câu làm sai:</strong>
                  <div className="mt-3">
                    {wrongQuestions.map((q) => {
                      const userAns = answers[q.id];
                      return (
                        <div key={q.id} className="bg-white rounded shadow-sm mb-4 p-4" style={{ transform: 'none' }}>
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <h5 className="mb-0 text-dark">{q.question}</h5>
                            <button className="btn btn-sm btn-outline-warning fw-bold text-dark ms-3 text-nowrap d-print-none" onClick={() => openSaveModal(q)} title="Lưu câu hỏi này">⭐ Lưu</button>
                          </div>
                          <div className="row">
                            {q.options.map((opt, oIdx) => {
                              const optNumber = oIdx + 1;
                              let btnClass = "btn-outline-secondary";
                              if (optNumber === q.correct_ans) btnClass = "btn-success text-white border-success"; 
                              else if (userAns === optNumber && userAns !== q.correct_ans) btnClass = "btn-danger text-white border-danger";
                              return (
                                <div className="col-sm-6 mb-3" key={oIdx}>
                                  <button className={`btn w-100 text-start py-2 ${btnClass}`} style={{ cursor: 'default' }}>{opt}</button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="d-flex flex-wrap gap-3 mt-4 d-print-none">
                    <button className="btn btn-warning fw-bold px-4" onClick={() => startExam(examData.id)}>Làm lại bài này</button>
                    <button className="btn btn-primary fw-bold px-4" onClick={handleCreateFromCurrentMistakes}>Tạo đề mới từ câu sai</button>
                    <button className="btn btn-secondary fw-bold px-4" onClick={() => window.print()}>🖨️ In kết quả (PDF)</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="col-lg-4 d-print-none">
          <div className="card shadow-sm border-0 sticky-top" style={{ top: '20px', zIndex: 1000 }}>
            <div className="card-body">
              <h5 className="mb-3 text-center">Bảng điều hướng</h5>
              {!isSubmitted && <p className="text-center text-muted small">Đã làm: <strong>{answeredCount} / {totalQuestions}</strong></p>}
              <div className="d-flex flex-wrap gap-2 justify-content-center" style={{ maxHeight: '65vh', overflowY: 'auto', paddingRight: '5px' }}>
                {examData.questions.map((q, idx) => {
                  const userAns = answers[q.id];
                  const isAnswered = userAns !== undefined;
                  let btnColorClass = "btn-outline-secondary";
                  if (isSubmitted) {
                    if (userAns === q.correct_ans) btnColorClass = "btn-success text-white";
                    else if (isAnswered) btnColorClass = "btn-danger text-white";
                  } else if (isAnswered) btnColorClass = "btn-primary";
                  return (
                    <button key={idx} className={`btn ${btnColorClass} fw-bold`} style={{ width: '48px', height: '48px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => scrollToQuestion(idx)}>
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamTaking;
````

## File: src/components/Flashcard.jsx
````javascript
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import api from '../api/axiosConfig';

function Flashcard({ vocab, autoPlay, reverse, onEdit }) {
  const [flipped, setFlipped] = useState(false);
  const [isStarred, setIsStarred] = useState(vocab.is_starred || false);

  useEffect(() => {
    setIsStarred(vocab.is_starred || false);
  }, [vocab]);

  const handleToggleStar = async (e) => {
    e.stopPropagation();
    const newState = !isStarred;
    setIsStarred(newState);
    vocab.is_starred = newState; 
    try {
      await api.put(`/vocabularies/${vocab.id}/star`, { is_starred: newState });
    } catch (error) {
      toast.error("Lỗi khi lưu trạng thái sao");
      setIsStarred(!newState); 
    }
  };

  const detectLanguage = (text) => {
    const hasJapanese = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(text);
    return hasJapanese ? 'ja-JP' : 'en-US';
  };

  const frontText = reverse ? vocab.meaning : vocab.word;
  const backText = reverse ? vocab.word : vocab.meaning;
  const frontLang = reverse ? 'vi-VN' : detectLanguage(vocab.word);
  const backLang = reverse ? detectLanguage(vocab.word) : 'vi-VN';
  const showFuriganaFront = !reverse && vocab.furigana;
  const showFuriganaBack = reverse && vocab.furigana;

  const speak = (text, lang) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      toast.error("Trình duyệt không hỗ trợ phát âm thanh.");
    }
  };

  useEffect(() => {
    setFlipped(false);
    if (autoPlay) {
      setTimeout(() => speak(frontText, frontLang), 250);
    }
  }, [vocab, autoPlay, reverse]);

  const handleFlip = () => {
    const newState = !flipped;
    setFlipped(newState);
    if (autoPlay) {
      speak(newState ? backText : frontText, newState ? backLang : frontLang);
    }
  };

  const playAudio = (e, text, lang) => {
    e.stopPropagation(); 
    speak(text, lang);
  };

  return (
    <div className="flashcard-container" onClick={handleFlip}>
      <div className={`flashcard-inner ${flipped ? "flipped" : ""}`}>
        <div className="flashcard-front flex-column">
          <button 
            className="btn btn-light position-absolute top-0 start-0 m-3 rounded-circle shadow-sm border-0 fs-5 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px', zIndex: 10, color: isStarred ? '#ffc107' : '#ced4da' }}
            onClick={handleToggleStar}
            title={isStarred ? "Bỏ đánh dấu sao" : "Đánh dấu sao (Từ khó)"}
          >
            ★
          </button>
          {showFuriganaFront && <span className="text-muted fw-normal" style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{vocab.furigana}</span>}
          <span>{frontText}</span>
          <button 
            className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm"
            style={{ width: '40px', height: '40px', zIndex: 10 }}
            onClick={(e) => playAudio(e, frontText, frontLang)}
            title="Nghe phát âm"
          >
            🔊
          </button>
        </div>
        <div className="flashcard-back flex-column">
          <button 
            className="btn btn-light position-absolute top-0 start-0 m-3 rounded-circle shadow-sm border-0 fs-5 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px', zIndex: 10, color: isStarred ? '#ffc107' : '#ced4da' }}
            onClick={handleToggleStar}
            title={isStarred ? "Bỏ đánh dấu sao" : "Đánh dấu sao (Từ khó)"}
          >
            ★
          </button>
          <button 
            className="btn btn-light position-absolute bottom-0 start-0 m-3 rounded-circle shadow-sm border-0 fs-5 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px', zIndex: 10 }}
            onClick={(e) => { e.stopPropagation(); if(onEdit) onEdit(vocab); }}
            title="Sửa từ vựng này"
          >
            ✏️
          </button>
          {showFuriganaBack && <span className="text-light opacity-75 fw-normal" style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{vocab.furigana}</span>}
          <span>{backText}</span>
          <button 
            className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm"
            style={{ width: '40px', height: '40px', zIndex: 10 }}
            onClick={(e) => playAudio(e, backText, backLang)}
            title="Nghe phát âm"
          >
            🔊
          </button>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
````

## File: src/components/FlashcardMode.jsx
````javascript
import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import Flashcard from './Flashcard';
import { VocabContext } from '../context/VocabContext';
import { toast } from 'react-toastify';
import LoadingSkeleton from './LoadingSkeleton';
import confetti from 'canvas-confetti';
import api from '../api/axiosConfig';

function FlashcardMode() {
  const { sets, loading, fetchSets } = useContext(VocabContext);
  const [selectedSetId, setSelectedSetId] = useState('all');

  useEffect(() => {
    fetchSets();
  }, [fetchSets]);
  
  const [vocabsToStudy, setVocabsToStudy] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [onlyStarred, setOnlyStarred] = useState(false);

  // Sửa nhanh trên Flashcard
  const [editingVocab, setEditingVocab] = useState(null);

  // Cấu hình nâng cao
  const [autoPlay, setAutoPlay] = useState(() => localStorage.getItem("flashcardAutoPlay") === "true");
  const [reverse, setReverse] = useState(false);
  const [isSlideshow, setIsSlideshow] = useState(false);
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("flashcardAutoPlay", autoPlay);
  }, [autoPlay]);

  const vibrate = (ms = 40) => {
    if (navigator.vibrate) navigator.vibrate(ms);
  };

  const handleStart = () => {
    let selectedVocabs = [];
    if (selectedSetId === 'all') {
      selectedVocabs = sets.flatMap(s => s.vocabularies);
    } else {
      const targetSet = sets.find(s => s.id === parseInt(selectedSetId));
      if (targetSet) selectedVocabs = targetSet.vocabularies;
    }

    if (selectedVocabs.length === 0) return toast.warning("Học phần này chưa có từ vựng!");
    if (onlyStarred) {
      selectedVocabs = selectedVocabs.filter(v => v.is_starred);
      if (selectedVocabs.length === 0) return toast.warning("Không có từ vựng nào được gắn sao (⭐)!");
    }

    setVocabsToStudy(selectedVocabs);
    setCurrentIndex(0);
    setIsStarted(true);
    setIsFinished(false);
    setIsSlideshow(false); 
  };

  const handleNext = useCallback(() => {
    vibrate();
    if (currentIndex < vocabsToStudy.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      setIsSlideshow(false); 
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }
  }, [currentIndex, vocabsToStudy.length]);

  const handlePrev = useCallback(() => {
    vibrate();
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  }, [currentIndex]);

  const handleShuffle = () => {
    vibrate(60);
    const shuffled = [...vocabsToStudy].sort(() => 0.5 - Math.random());
    setVocabsToStudy(shuffled);
    setCurrentIndex(0); 
    setIsFinished(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => toast.error("Trình duyệt không hỗ trợ Fullscreen"));
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isStarted || isFinished || editingVocab) return;
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault(); 
        document.querySelector('.flashcard-container')?.click();
      } else if (e.code === 'ArrowRight') handleNext();
      else if (e.code === 'ArrowLeft') handlePrev();
      else if (e.code === 'KeyF') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isStarted, isFinished, editingVocab, handleNext, handlePrev]);

  useEffect(() => {
    let flipTimer, nextTimer;
    if (isSlideshow && !isFinished && isStarted && !editingVocab) {
      flipTimer = setTimeout(() => document.querySelector('.flashcard-container')?.click(), 2500); 
      nextTimer = setTimeout(() => handleNext(), 5000); 
    }
    return () => { clearTimeout(flipTimer); clearTimeout(nextTimer); };
  }, [currentIndex, isSlideshow, isFinished, isStarted, editingVocab, handleNext]);

  const handleQuickSave = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/vocabularies/${editingVocab.id}`, editingVocab);
      
      // Cập nhật mảng đang học ngay lập tức để thấy thay đổi
      setVocabsToStudy(prev => {
        const newArr = [...prev];
        newArr[currentIndex] = editingVocab;
        return newArr;
      });
      
      toast.success("Đã lưu chỉnh sửa!");
      setEditingVocab(null);
    } catch (err) {
      toast.error("Lỗi khi lưu!");
    }
  };

  if (loading) return <LoadingSkeleton />;

  if (!isStarted) {
    return (
      <div className="container mt-5" style={{ maxWidth: '500px' }}>
        <div className="card shadow-sm border-0 p-4 rounded-4">
          <h4 className="text-center mb-4 fw-bold">Chế độ Flashcards</h4>
          <div className="mb-4">
            <label className="form-label fw-bold text-muted">Chọn học phần muốn ôn:</label>
            <select className="form-select form-select-lg bg-light border-0" value={selectedSetId} onChange={(e) => setSelectedSetId(e.target.value)}>
              <option value="all">-- Tất cả từ vựng --</option>
              {sets.map(s => <option key={s.id} value={s.id}>{s.title} ({s.vocabularies.length} từ)</option>)}
            </select>
          </div>
          <div className="mb-4 text-start">
            <div className="form-check form-switch fs-6 d-flex align-items-center gap-2">
              <input className="form-check-input m-0 shadow-sm" type="checkbox" id="starToggle" checked={onlyStarred} onChange={(e) => setOnlyStarred(e.target.checked)} style={{ cursor: 'pointer' }} />
              <label className="form-check-label fw-bold text-dark m-0" htmlFor="starToggle" style={{ cursor: 'pointer' }}>Chỉ ôn tập thẻ được gắn sao (⭐)</label>
            </div>
          </div>
          <button className="btn btn-primary btn-lg w-100 fw-bold" onClick={handleStart}>Bắt đầu lật thẻ</button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="container mt-5 text-center fade-in-slide">
        <div className="card shadow-sm border-0 p-5 rounded-4 mx-auto bg-primary text-white position-relative overflow-hidden" style={{ maxWidth: '500px' }}>
          <div className="position-relative" style={{ zIndex: 2 }}>
            <div className="display-1 mb-3">🎓</div>
            <h2 className="fw-bold mb-3">Chúc mừng!</h2>
            <p className="fs-5 opacity-75 mb-4">Bạn đã ôn tập xong <strong>{vocabsToStudy.length}</strong> thẻ từ vựng.</p>
            <div className="d-flex flex-column gap-3">
              <button className="btn btn-warning py-3 fw-bold text-dark fs-5 shadow-sm" onClick={handleShuffle}>🔀 Trộn & Học lại</button>
              <button className="btn btn-light py-3 fw-bold fs-5 text-primary shadow-sm" onClick={() => setIsStarted(false)}>Học phần khác</button>
            </div>
          </div>
          <div className="position-absolute bg-white opacity-10 rounded-circle" style={{ width: '200px', height: '200px', top: '-50px', right: '-50px' }}></div>
          <div className="position-absolute bg-white opacity-10 rounded-circle" style={{ width: '150px', height: '150px', bottom: '-20px', left: '-50px' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`container-fluid py-4 text-center transition-all ${isFullscreen ? 'bg-light d-flex flex-column justify-content-center align-items-center' : ''}`} ref={containerRef} style={isFullscreen ? { height: '100vh', overflow: 'hidden' } : {}}>
      
      {/* Modal Sửa Nhanh */}
      {editingVocab && (
        <div className="modal d-flex align-items-center justify-content-center fade-in" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1060, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div className="card border-0 shadow-lg rounded-4 p-4" style={{ width: '90%', maxWidth: '400px' }}>
            <h5 className="fw-bold mb-4">✏️ Sửa nhanh thẻ</h5>
            <form onSubmit={handleQuickSave}>
              <input type="text" className="form-control bg-light border-0 mb-3 fw-bold" value={editingVocab.word} onChange={e => setEditingVocab({...editingVocab, word: e.target.value})} placeholder="Từ vựng" required />
              <input type="text" className="form-control bg-light border-0 mb-3" value={editingVocab.furigana || ''} onChange={e => setEditingVocab({...editingVocab, furigana: e.target.value})} placeholder="Phiên âm (Tùy chọn)" />
              <input type="text" className="form-control bg-light border-0 mb-4" value={editingVocab.meaning} onChange={e => setEditingVocab({...editingVocab, meaning: e.target.value})} placeholder="Ý nghĩa" required />
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-secondary w-50 fw-bold" onClick={() => setEditingVocab(null)}>Hủy</button>
                <button type="submit" className="btn btn-primary w-50 fw-bold">Lưu lại</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center mx-auto mb-3" style={{ maxWidth: '450px' }}>
        <h3 className="m-0 fw-bold">Flashcards</h3>
        <button className="btn btn-light rounded-circle shadow-sm border-0" onClick={toggleFullscreen} title="Bật/Tắt Toàn màn hình (Phím F)">
          {isFullscreen ? '↙️' : '⛶'}
        </button>
      </div>
      
      <div className="mb-2 text-muted fw-bold d-flex justify-content-between align-items-center mx-auto" style={{ maxWidth: '450px' }}>
        <span>Thẻ {currentIndex + 1} / {vocabsToStudy.length}</span>
        <span>{Math.round(((currentIndex + 1) / vocabsToStudy.length) * 100)}%</span>
      </div>
      <div className="progress mb-4 mx-auto" style={{ height: '8px', maxWidth: '450px' }}>
        <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${((currentIndex + 1) / vocabsToStudy.length) * 100}%` }}></div>
      </div>

      <div className="d-flex justify-content-center fade-in-slide" key={currentIndex}>
        <Flashcard vocab={vocabsToStudy[currentIndex]} autoPlay={autoPlay} reverse={reverse} onEdit={setEditingVocab} />
      </div>
      
      <div className="d-flex flex-wrap justify-content-center gap-4 mx-auto mt-4" style={{ maxWidth: '600px' }}>
        <div className="form-check form-switch">
          <input className="form-check-input shadow-sm" type="checkbox" id="autoPlaySwitch" checked={autoPlay} onChange={() => setAutoPlay(!autoPlay)} style={{ cursor: 'pointer' }} />
          <label className="form-check-label text-muted fw-bold" htmlFor="autoPlaySwitch" style={{ cursor: 'pointer' }}>Phát âm</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input shadow-sm" type="checkbox" id="reverseSwitch" checked={reverse} onChange={() => setReverse(!reverse)} style={{ cursor: 'pointer' }} />
          <label className="form-check-label text-muted fw-bold" htmlFor="reverseSwitch" style={{ cursor: 'pointer' }}>Đảo mặt</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input shadow-sm" type="checkbox" id="slideshowSwitch" checked={isSlideshow} onChange={() => setIsSlideshow(!isSlideshow)} style={{ cursor: 'pointer' }} />
          <label className="form-check-label text-muted fw-bold" htmlFor="slideshowSwitch" style={{ cursor: 'pointer' }}>Trình chiếu</label>
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-center gap-3">
        <button className="btn btn-outline-secondary px-4 py-2 fw-bold" onClick={handlePrev} disabled={currentIndex === 0}>← Trước</button>
        <button className="btn btn-warning px-4 py-2 fw-bold text-white" onClick={handleShuffle}>🔀 Trộn</button>
        <button className="btn btn-primary px-4 py-2 fw-bold" onClick={handleNext}>Tiếp →</button>
      </div>
      
      {!isFullscreen && (
        <p className="text-muted small mb-0 mt-4 d-none d-md-block">
          💡 <strong>Mẹo:</strong> Phím <strong>Space</strong> lật thẻ, <strong>Trái/Phải</strong> chuyển từ, <strong>F</strong> toàn màn hình.
        </p>
      )}

      {!isFullscreen && (
        <div className="mt-4">
           <button className="btn btn-link text-muted text-decoration-none fw-bold" onClick={() => setIsStarted(false)}>
              &larr; Đổi học phần khác
           </button>
        </div>
      )}
    </div>
  );
}

export default FlashcardMode;
````

## File: src/components/LearnMode.jsx
````javascript
import React, { useState, useEffect, useContext, useRef } from 'react';
import { VocabContext } from '../context/VocabContext';
import { toast } from 'react-toastify';
import LoadingSkeleton from './LoadingSkeleton';
import confetti from 'canvas-confetti';
import api from '../api/axiosConfig';

const CHUNK_SIZE = 4;

function LearnMode() {
  const { sets, allVocabs, loading, fetchSets, fetchAllVocabs } = useContext(VocabContext);
  const [selectedSetId, setSelectedSetId] = useState('all');

  useEffect(() => { fetchSets(); fetchAllVocabs(); }, [fetchSets, fetchAllVocabs]);

  const [isStarted, setIsStarted] = useState(false);
  const [askType, setAskType] = useState('meaning'); 
  const [rounds, setRounds] = useState([]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [currentRoundWords, setCurrentRoundWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mode, setMode] = useState('choice'); 
  const [options, setOptions] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [feedback, setFeedback] = useState(null);
  
  const [isShaking, setIsShaking] = useState(false);
  const [onlyDue, setOnlyDue] = useState(false); 
  const [onlyStarred, setOnlyStarred] = useState(false); 

  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0); 
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const vibrate = (pattern) => { if (navigator.vibrate) navigator.vibrate(pattern); };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) containerRef.current?.requestFullscreen().catch(() => toast.error("Không hỗ trợ Fullscreen"));
    else document.exitFullscreen();
  };

  // Hàm thoát ra ngoài an toàn
  const handleExit = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setIsStarted(false);
  };

  useEffect(() => {
    const handleFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFs);
    return () => document.removeEventListener("fullscreenchange", handleFs);
  }, []);

  const updateSRS = async (vocabId, isCorrect) => {
    try { await api.put(`/vocabularies/${vocabId}/srs`, { is_correct: isCorrect }); } 
    catch (err) { console.error("Lỗi cập nhật SRS:", err); }
  };

  const detectLanguage = (text) => /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(text) ? 'ja-JP' : 'vi-VN';

  const playAudio = (text, type = 'normal') => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = detectLanguage(text);
      utterance.rate = type === 'error' ? 0.8 : 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStart = () => {
    let pool = selectedSetId === 'all' ? sets.flatMap(s => s.vocabularies) : (sets.find(s => s.id === parseInt(selectedSetId))?.vocabularies || []);

    if (onlyDue) {
      const now = new Date();
      pool = pool.filter(v => v.next_review && new Date(v.next_review) <= now);
      if (pool.length === 0) return toast.success("Tuyệt vời! Không có từ vựng nào đến hạn.");
    }

    if (onlyStarred) {
      pool = pool.filter(v => v.is_starred);
      if (pool.length === 0) return toast.warning("Chưa có từ vựng được gắn sao!");
    }

    if (pool.length === 0) return toast.warning("Học phần này chưa có từ vựng!");

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const chunked = [];
    for (let i = 0; i < shuffled.length; i += CHUNK_SIZE) chunked.push(shuffled.slice(i, i + CHUNK_SIZE));
    
    setRounds(chunked);
    setCurrentRoundIndex(0);
    setCurrentWordIndex(0);
    setMode('choice');
    setCurrentRoundWords([...chunked[0]]);
    generateOptions(chunked[0][0], allVocabs);
    setStreak(0);
    setMaxStreak(0);
    setIsStarted(true);
    setIsFinished(false);
  };

  const generateOptions = (currentWord, allData) => {
    if (!currentWord) return;
    const scoredAnswers = allData.filter(v => v.id !== currentWord.id).map(v => {
      let score = 0;
      currentWord.word.split('').forEach(c => { if (v.word.includes(c)) score += 1; });
      return { ...v, score: score + Math.random() * 0.5 };
    });
    scoredAnswers.sort((a, b) => b.score - a.score);
    const choices = [...scoredAnswers.slice(0, 3), currentWord].sort(() => 0.5 - Math.random());
    setOptions(choices);
  };

  const handleNextAfterFeedback = () => {
    setFeedback(null);
    setInputText('');

    if (currentWordIndex < currentRoundWords.length - 1) {
      const nextWord = currentRoundWords[currentWordIndex + 1];
      setCurrentWordIndex(currentWordIndex + 1);
      if (mode === 'choice') generateOptions(nextWord, allVocabs);
    } else {
      if (mode === 'choice') {
        setMode('typing');
        setCurrentWordIndex(0);
        setCurrentRoundWords([...rounds[currentRoundIndex]]);
      } else {
        if (currentRoundIndex < rounds.length - 1) {
          const nextRoundIdx = currentRoundIndex + 1;
          setCurrentRoundIndex(nextRoundIdx);
          setCurrentWordIndex(0);
          setMode('choice');
          setCurrentRoundWords([...rounds[nextRoundIdx]]);
          generateOptions(rounds[nextRoundIdx][0], allVocabs);
        } else {
          setIsFinished(true);
          confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
          vibrate([100, 50, 100, 50, 200]); 
        }
      }
    }
  };

  const handleWrongAnswer = (currentWord, correctAnswer, userAnsText) => {
    vibrate([200, 100, 200]); 
    setStreak(0);
    updateSRS(currentWord.id, false);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 400);
    setCurrentRoundWords(prev => [...prev, currentWord]); 
    setFeedback({ isCorrect: false, correctAnswer, yourAnswer: userAnsText });
    playAudio(correctAnswer, 'error');
  };

  const handleCorrectAnswer = (currentWord) => {
    vibrate(40);
    const newStreak = streak + 1;
    setStreak(newStreak);
    if (newStreak > maxStreak) setMaxStreak(newStreak);
    updateSRS(currentWord.id, true);
    handleNextAfterFeedback();
  };

  const handleChoiceSubmit = (selectedOption) => {
    const currentWord = currentRoundWords[currentWordIndex];
    if (selectedOption.id === currentWord.id) handleCorrectAnswer(currentWord);
    else handleWrongAnswer(currentWord, askType === 'meaning' ? currentWord.word : currentWord.meaning, askType === 'meaning' ? selectedOption.word : selectedOption.meaning);
  };

  const checkFuzzyMatch = (input, correctStr) => {
    const clean = (str) => str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").trim().toLowerCase();
    return correctStr.split(',').map(s => clean(s)).includes(clean(input));
  };

  const handleTypeSubmit = (e) => {
    e.preventDefault();
    const currentWord = currentRoundWords[currentWordIndex];
    const correctAnswer = askType === 'meaning' ? currentWord.word : currentWord.meaning;
    if (checkFuzzyMatch(inputText, correctAnswer)) handleCorrectAnswer(currentWord);
    else handleWrongAnswer(currentWord, correctAnswer, inputText.trim() || "(Để trống)");
  };

  const handleDontKnow = () => {
    const currentWord = currentRoundWords[currentWordIndex];
    handleWrongAnswer(currentWord, askType === 'meaning' ? currentWord.word : currentWord.meaning, "Không biết 🤷‍♂️");
  };

  if (loading) return <LoadingSkeleton />;

  if (!isStarted) {
    return (
      <div className="container mt-5 fade-in-slide" style={{ maxWidth: '500px' }}>
        <div className="card shadow-sm border-0 p-4 rounded-4">
          <h4 className="text-center mb-4 fw-bold">Cài đặt Chế độ Học</h4>
          <div className="mb-3">
            <label className="form-label fw-bold text-muted">Chọn học phần muốn học:</label>
            <select className="form-select form-select-lg bg-light border-0" value={selectedSetId} onChange={(e) => setSelectedSetId(e.target.value)}>
              <option value="all">-- Tất cả từ vựng --</option>
              {sets.map(s => <option key={s.id} value={s.id}>{s.title} ({s.vocabularies.length} từ)</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label className="form-label fw-bold text-muted">Chọn câu hỏi hiển thị:</label>
            <select className="form-select form-select-lg bg-light border-0" value={askType} onChange={(e) => setAskType(e.target.value)}>
              <option value="meaning">Tiếng Việt (Hỏi Nghĩa, gõ Từ vựng)</option>
              <option value="word">Tiếng Nhật (Hỏi Từ vựng, gõ Nghĩa)</option>
            </select>
          </div>
          <div className="mb-4 text-start">
            <div className="form-check form-switch fs-6 d-flex align-items-center gap-3 bg-white p-3 rounded-4 border shadow-sm">
              <input className="form-check-input m-0 shadow-sm" type="checkbox" id="srsToggle" checked={onlyDue} onChange={(e) => setOnlyDue(e.target.checked)} style={{ cursor: 'pointer' }} />
              <label className="form-check-label fw-bold text-dark m-0" htmlFor="srsToggle" style={{ cursor: 'pointer' }}>Chỉ ôn tập từ đến hạn (SRS)</label>
            </div>
            <div className="form-check form-switch fs-6 d-flex align-items-center gap-3 bg-white p-3 rounded-4 border shadow-sm mt-3">
              <input className="form-check-input m-0 shadow-sm" type="checkbox" id="starredLearnToggle" checked={onlyStarred} onChange={(e) => setOnlyStarred(e.target.checked)} style={{ cursor: 'pointer' }} />
              <label className="form-check-label fw-bold text-dark m-0" htmlFor="starredLearnToggle" style={{ cursor: 'pointer' }}>Chỉ học từ được gắn sao (⭐)</label>
            </div>
          </div>
          <button className="btn btn-primary btn-lg w-100 fw-bold" onClick={handleStart}>Bắt đầu học</button>
        </div>
      </div>
    );
  }

  const currentWord = currentRoundWords[currentWordIndex];
  const questionText = askType === 'meaning' ? currentWord?.meaning : currentWord?.word;
  const progressPercent = Math.round(((currentRoundIndex + (currentWordIndex/currentRoundWords.length)) / rounds.length) * 100);

  return (
    <div className={`container-fluid py-4 transition-all ${isFullscreen ? 'bg-light d-flex flex-column justify-content-center' : ''}`} ref={containerRef} style={isFullscreen ? { minHeight: '100vh', overflow: 'hidden' } : {}}>
      <div className="mx-auto" style={{ maxWidth: '600px', width: '100%' }}>
        
        {!isFinished && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <button className="btn btn-light rounded-circle shadow-sm border-0 d-print-none" onClick={toggleFullscreen} title="Toàn màn hình (F)">
                {isFullscreen ? '↙️' : '⛶'}
              </button>
              <div className="d-flex align-items-center gap-3 fw-bold text-muted">
                {streak > 0 && (
                  <div className="streak-indicator d-flex align-items-center bg-white rounded-pill shadow-sm border overflow-hidden fade-in" style={{ height: '38px', borderColor: streak >= 5 ? '#dc3545' : '#ffc107' }}>
                    <div className={`px-3 h-100 d-flex align-items-center fw-bold fs-6 text-white ${streak >= 5 ? 'bg-danger streak-glow' : 'bg-warning text-dark'}`}>
                      🔥 {streak}
                    </div>
                    <div className="d-flex align-items-center gap-1 px-2" style={{ width: '70px' }}>
                      {[...Array(5)].map((_, i) => {
                        const isActive = i < (streak > 0 ? ((streak - 1) % 5) + 1 : 0);
                        return (
                          <div 
                            key={i} 
                            className={`rounded-pill ${isActive ? (streak >= 5 ? 'bg-danger' : 'bg-warning') : 'bg-light'}`} 
                            style={{ height: '6px', flexGrow: 1, transition: 'all 0.3s ease', transform: isActive ? 'scaleY(1.5)' : 'scaleY(1)' }}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                )}
                <span className="fs-5">{progressPercent}%</span>
              </div>
            </div>
            <div className="progress mb-4 shadow-sm" style={{ height: '10px', borderRadius: '10px' }}>
              <div className="progress-bar bg-success" role="progressbar" style={{ width: `${progressPercent}%`, transition: 'width 0.4s ease' }}></div>
            </div>
          </>
        )}
        
        {isFinished ? (
          <div className="card shadow-lg border-0 p-5 rounded-4 fade-in-slide mx-auto bg-white">
            <div className="display-1 mb-3 text-center">🏆</div>
            <h2 className="fw-bold text-success mb-3 text-center">Bài học hoàn tất!</h2>
            <p className="fs-5 text-muted mb-4 text-center">Mỗi ngày học một chút là con đường dẫn đến thành công.</p>
            
            <div className="row g-3 mb-5">
              <div className="col-6">
                <div className="bg-light p-4 rounded-4 h-100 border border-warning text-center" style={{ borderWidth: '2px !important' }}>
                  <h2 className="fw-bold text-warning mb-0">🔥 {maxStreak}</h2>
                  <span className="fw-bold text-muted small">CHUỖI DÀI NHẤT</span>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-light p-4 rounded-4 h-100 border border-primary text-center" style={{ borderWidth: '2px !important' }}>
                  <h2 className="fw-bold text-primary mb-0">⚡ {rounds.flat().length * 10}</h2>
                  <span className="fw-bold text-muted small">TỔNG ĐIỂM XP</span>
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-lg fw-bold w-100 shadow-sm" onClick={handleExit}>Hoàn thành & Quay lại</button>
          </div>
        ) : (
          <div className={`card shadow-sm border-0 rounded-4 fade-in-slide ${isShaking ? 'shake border border-danger' : ''}`} key={`${currentRoundIndex}-${currentWordIndex}-${mode}-${feedback ? 'fb' : 'q'}`}>
            <div className="card-body p-4 p-md-5">
              {feedback ? (
                <div className="text-center">
                  <h5 className="text-danger fw-bold mb-4">❌ Chưa chính xác! Từ này sẽ được hỏi lại.</h5>
                  <div className="p-4 mb-4 bg-light rounded-4 text-start border-start border-danger border-4">
                    <p className="mb-2"><strong>Câu hỏi:</strong> <span className="text-primary">{questionText}</span></p>
                    <p className="text-muted mb-3"><strong>Bạn chọn/gõ:</strong> <span className="text-decoration-line-through">{feedback.yourAnswer}</span></p>
                    <p className="text-success fs-4 mb-0 fw-bold">
                      ✓ {feedback.correctAnswer}
                      <button className="btn btn-sm btn-light rounded-circle ms-3 shadow-sm border" onClick={() => playAudio(feedback.correctAnswer)} title="Nghe lại">🔊</button>
                    </p>
                  </div>
                  <button className="btn btn-primary btn-lg fw-bold w-100 mt-2 shadow-sm" onClick={handleNextAfterFeedback} autoFocus>Đã hiểu, tiếp tục</button>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="text-dark fw-bold mb-5" style={{ fontSize: '2rem' }}>{questionText}</h3>
                  
                  {mode === 'choice' ? (
                    <div className="d-flex flex-column gap-3">
                      {options.map((opt) => (
                        <button key={opt.id} className="btn btn-light border py-3 text-start px-4 fs-5 fw-bold hover-bg-light transition-all" onClick={() => handleChoiceSubmit(opt)}>
                          {askType === 'meaning' ? opt.word : opt.meaning}
                        </button>
                      ))}
                      <button className="btn btn-outline-secondary border-0 py-3 fw-bold mt-2 text-decoration-underline" onClick={handleDontKnow}>Không biết 🤷‍♂️</button>
                    </div>
                  ) : (
                    <form onSubmit={handleTypeSubmit}>
                      <input 
                        type="text" 
                        className="form-control form-control-lg text-center mb-4 py-4 bg-light border-0 fw-bold" 
                        placeholder={askType === 'meaning' ? "Gõ từ vựng..." : "Gõ ý nghĩa..."}
                        value={inputText} onChange={(e) => setInputText(e.target.value)} autoComplete="off" autoFocus
                        style={{ fontSize: '1.5rem', borderRadius: '16px' }}
                      />
                      <div className="d-flex gap-3">
                        <button type="button" className="btn btn-outline-secondary w-50 py-3 fs-5 fw-bold border-0" onClick={handleDontKnow}>Bỏ qua</button>
                        <button type="submit" className="btn btn-primary w-50 py-3 fs-5 fw-bold shadow-sm">Kiểm tra</button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LearnMode;
````

## File: src/components/LoadingSkeleton.jsx
````javascript
import React from 'react';

function LoadingSkeleton() {
  return (
    <div className="container mt-5" style={{ maxWidth: '850px' }}>
      <div className="text-center mb-4 placeholder-glow">
        <span className="placeholder col-4 rounded bg-secondary" style={{ height: '35px', opacity: 0.2 }}></span>
      </div>
      {[1, 2, 3].map(i => (
        <div key={i} className="card shadow-sm border-0 rounded-4 mb-4">
          <div className="card-body p-4 placeholder-glow">
            <h5 className="card-title placeholder col-5 rounded bg-secondary" style={{ opacity: 0.2 }}></h5>
            <p className="card-text placeholder col-8 rounded bg-secondary mb-2" style={{ opacity: 0.1 }}></p>
            <p className="card-text placeholder col-4 rounded bg-secondary" style={{ opacity: 0.1 }}></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;
````

## File: src/components/MatchMode.jsx
````javascript
import React, { useState, useEffect, useContext, useRef } from 'react';
import { VocabContext } from '../context/VocabContext';
import { toast } from 'react-toastify';
import LoadingSkeleton from './LoadingSkeleton';
import confetti from 'canvas-confetti';

function MatchMode() {
  const { sets, allVocabs, loading, fetchSets, fetchAllVocabs } = useContext(VocabContext);
  const [selectedSetId, setSelectedSetId] = useState('all');
  const [difficulty, setDifficulty] = useState(6); 
  const [gameMode, setGameMode] = useState('normal'); 
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lastMatchTime, setLastMatchTime] = useState(null);
  const [highScore, setHighScore] = useState(null);
  const [bestTime, setBestTime] = useState(null);
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => { fetchSets(); fetchAllVocabs(); }, [fetchSets, fetchAllVocabs]);

  useEffect(() => {
    setBestTime(localStorage.getItem(`matchBest_${selectedSetId}_${difficulty}`) || null);
    setHighScore(localStorage.getItem(`matchScore_${selectedSetId}`) || null);
  }, [selectedSetId, difficulty]);
  
  const [isStarted, setIsStarted] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [errorCards, setErrorCards] = useState([]); 
  const [isAnimating, setIsAnimating] = useState(false); 
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const vibrate = (pattern) => { if (navigator.vibrate) navigator.vibrate(pattern); };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) containerRef.current?.requestFullscreen().catch(() => {});
    else document.exitFullscreen();
  };

  useEffect(() => {
    const handleFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFs);
    return () => document.removeEventListener("fullscreenchange", handleFs);
  }, []);

  useEffect(() => {
    let interval;
    if (isStarted && !isFinished) {
      interval = setInterval(() => {
        setTimeElapsed(prev => {
          if (gameMode === 'challenge') {
            if (prev <= 1) { setIsFinished(true); return 0; }
            return prev - 1;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStarted, isFinished, gameMode]);

  useEffect(() => {
    if (cards.length > 0 && matchedIds.length === cards.length / 2) {
      if (gameMode === 'challenge') generateCards(); 
      else {
        setIsFinished(true);
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
        vibrate([100, 50, 100, 50, 200]);
        const key = `matchBest_${selectedSetId}_${cards.length / 2}`;
        if (!bestTime || timeElapsed < bestTime) {
          localStorage.setItem(key, timeElapsed);
          setBestTime(timeElapsed);
          toast.success(`🎉 Kỷ lục mới: ${timeElapsed} giây!`);
        }
      }
    }
  }, [matchedIds, cards, gameMode, timeElapsed, bestTime, selectedSetId]);

  useEffect(() => {
    if (isFinished && gameMode === 'challenge') {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
      vibrate([100, 50, 100, 50, 200]);
      if (!highScore || score > highScore) {
        localStorage.setItem(`matchScore_${selectedSetId}`, score);
        setHighScore(score);
        toast.success(`🏆 Điểm cao mới: ${score} điểm!`);
      }
    }
  }, [isFinished, gameMode, score, highScore, selectedSetId]);

  const generateCards = () => {
    let pool = selectedSetId === 'all' ? allVocabs : (sets.find(s => s.id === parseInt(selectedSetId))?.vocabularies || []);
    const actualDifficulty = Math.min(difficulty, pool.length);
    const pivotIndex = Math.floor(Math.random() * pool.length);
    const pivotWord = pool[pivotIndex] || pool[0];
    
    const scoredPool = pool.map(v => {
      let sc = v.id === pivotWord.id ? 999 : 0;
      pivotWord.word.split('').forEach(c => { if (v.word.includes(c)) sc += 1; });
      return { ...v, score: sc + Math.random() };
    }).sort((a, b) => b.score - a.score);
    
    const initialCards = [];
    scoredPool.slice(0, actualDifficulty).forEach(vocab => {
      initialCards.push({ id: `word-${vocab.id}-${Date.now()}`, matchId: vocab.id, text: vocab.word });
      initialCards.push({ id: `mean-${vocab.id}-${Date.now()}`, matchId: vocab.id, text: vocab.meaning });
    });
    setCards(initialCards.sort(() => 0.5 - Math.random()));
    setMatchedIds([]);
  };

  const startGame = () => {
    let pool = selectedSetId === 'all' ? allVocabs : (sets.find(s => s.id === parseInt(selectedSetId))?.vocabularies || []);
    if (pool.length < 2) return toast.warning(`Cần ít nhất 2 từ vựng để chơi!`);

    generateCards();
    setSelectedCards([]);
    setErrorCards([]);
    setIsAnimating(false);
    setTimeElapsed(gameMode === 'challenge' ? 60 : 0);
    setScore(0);
    setCombo(0);
    setLastMatchTime(null);
    setIsFinished(false);
    setIsStarted(true);
  };

  const handleCardClick = (card) => {
    if (isAnimating || matchedIds.includes(card.matchId) || selectedCards.length === 2 || selectedCards.find(c => c.id === card.id)) return;
    vibrate(20); // Chạm thẻ rung nhẹ

    const newSelected = [...selectedCards, card];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setIsAnimating(true); 
      if (newSelected[0].matchId === newSelected[1].matchId) {
        vibrate(50); // Rung thành công
        const now = Date.now();
        let newCombo = 1;
        if (lastMatchTime && (now - lastMatchTime < 2500)) newCombo = combo + 1; 
        
        setCombo(newCombo);
        setScore(s => s + (10 * newCombo));
        setLastMatchTime(now);

        setTimeout(() => {
          setMatchedIds(prev => [...prev, newSelected[0].matchId]);
          setSelectedCards([]);
          setIsAnimating(false); 
        }, 300);
      } else {
        vibrate([100, 50, 100]); // Rung cảnh báo sai
        setCombo(0); 
        setErrorCards([newSelected[0].id, newSelected[1].id]);
        setTimeout(() => {
          setSelectedCards([]);
          setErrorCards([]);
          setIsAnimating(false); 
        }, 800);
      }
    }
  };

  if (loading) return <LoadingSkeleton />;

  if (!isStarted) {
    return (
      <div className="container mt-5 fade-in-slide" style={{ maxWidth: '500px' }}>
        <div className="card shadow-sm border-0 p-4 rounded-4">
          <h3 className="text-center mb-4 fw-bold">Game Ghép Thẻ</h3>
          <div className="mb-3">
            <label className="form-label fw-bold text-muted">Chế độ chơi:</label>
            <div className="d-flex gap-2">
              <button className={`btn w-50 fw-bold ${gameMode === 'normal' ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setGameMode('normal')}>Thường</button>
              <button className={`btn w-50 fw-bold ${gameMode === 'challenge' ? 'btn-danger' : 'btn-outline-secondary'}`} onClick={() => setGameMode('challenge')}>Thử thách 60s</button>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold text-muted">Chọn học phần:</label>
            <select className="form-select form-select-lg bg-light border-0 fw-bold text-dark" value={selectedSetId} onChange={(e) => setSelectedSetId(e.target.value)}>
              <option value="all">-- Tất cả từ vựng --</option>
              {sets.map(s => <option key={s.id} value={s.id}>{s.title} ({s.vocabularies.length} từ)</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label className="form-label fw-bold text-muted">Độ khó (Số cặp thẻ):</label>
            <input type="number" className="form-control bg-light border-0 fw-bold text-center text-dark" value={difficulty} min={2} onChange={(e) => setDifficulty(parseInt(e.target.value) || 2)} />
          </div>
          {gameMode === 'normal' && bestTime !== null && <div className="alert alert-info text-center fw-bold shadow-sm border-0 mb-4 rounded-3">🏆 Kỷ lục tốc độ: {bestTime} giây</div>}
          {gameMode === 'challenge' && highScore !== null && <div className="alert alert-warning text-center fw-bold shadow-sm border-0 mb-4 rounded-3">🏆 Điểm cao nhất: {highScore} điểm</div>}
          <button className={`btn btn-lg w-100 fw-bold shadow-sm ${gameMode === 'challenge' ? 'btn-danger' : 'btn-primary'}`} onClick={startGame}>Bắt đầu chơi</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`container-fluid py-4 text-center transition-all ${isFullscreen ? 'bg-light d-flex flex-column justify-content-center' : ''}`} ref={containerRef} style={isFullscreen ? { minHeight: '100vh', overflow: 'hidden' } : {}}>
      <div className="mx-auto" style={{ maxWidth: '900px', width: '100%' }}>
        
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button className="btn btn-light rounded-circle shadow-sm border-0" onClick={toggleFullscreen} title="Toàn màn hình">
            {isFullscreen ? '↙️' : '⛶'}
          </button>

          <h4 className="fw-bold m-0 text-center flex-grow-1">
            {gameMode === 'challenge' ? 'Còn lại: ' : 'Thời gian: '}
            <span className={gameMode === 'challenge' && timeElapsed <= 10 ? 'text-danger shake d-inline-block' : 'text-primary'}>{timeElapsed}s</span>
          </h4>
          
          <button className="btn btn-outline-secondary fw-bold" onClick={() => setIsStarted(false)}>Thoát</button>
        </div>

        {gameMode === 'challenge' && (
          <div className="mb-4 d-flex flex-column align-items-center gap-2 position-relative">
            <div className="d-flex align-items-center gap-3">
              <h4 className="fw-bold m-0 border px-4 py-2 rounded-pill bg-white shadow-sm">
                Điểm: <span className="text-success">{score}</span>
              </h4>
              {combo > 1 && (
                <div className="position-relative">
                  <span className="badge rounded-pill bg-danger fs-5 px-3 py-2 fade-in shadow-sm streak-glow">
                    Combo x{combo} 🔥
                  </span>
                  {/* Thanh thời gian đếm ngược 2.5s để giữ Combo */}
                  <div className="position-absolute top-100 start-50 translate-middle-x mt-2 w-100 overflow-hidden rounded-pill" style={{ height: '6px', backgroundColor: 'rgba(220,53,69,0.2)' }}>
                    <div key={combo} className="bg-danger h-100 combo-timer-bar rounded-pill"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {isFinished ? (
          <div className="card shadow-lg border-0 p-5 mt-4 rounded-4 fade-in-slide mx-auto bg-white" style={{ maxWidth: '600px' }}>
            <h2 className="text-success fw-bold mb-3">🎉 Tuyệt vời!</h2>
            {gameMode === 'normal' ? (
              <p className="fs-5 text-muted mb-4">Bạn đã hoàn thành trong <strong className="text-dark">{timeElapsed} giây</strong>.</p>
            ) : (
              <p className="fs-5 text-muted mb-4">Tổng điểm của bạn: <strong className="text-danger fs-3">{score}</strong></p>
            )}
            <button className={`btn btn-lg mt-2 fw-bold w-100 shadow-sm ${gameMode === 'challenge' ? 'btn-danger' : 'btn-primary'}`} onClick={startGame}>Chơi lại</button>
          </div>
        ) : (
          <div className="row g-3 px-2">
            {cards.map(card => {
              const isSelected = selectedCards.some(c => c.id === card.id);
              const isMatched = matchedIds.includes(card.matchId);
              const isError = errorCards.includes(card.id);
              
              if (isMatched) {
                return (
                  <div className="col-6 col-md-4 col-lg-3" key={card.id}>
                    <div className="card h-100 border-0 bg-transparent" style={{ opacity: 0, cursor: 'default' }}><div className="card-body p-4"></div></div>
                  </div>
                );
              }

              let cardClasses = 'bg-white text-dark hover-bg-light';
              let cardStyles = { cursor: 'pointer', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid transparent' };
              if (isSelected) { cardClasses = 'bg-primary text-white'; cardStyles.border = '3px solid var(--bs-primary)'; }
              if (isError) { cardClasses = 'bg-danger text-white shake'; cardStyles.border = '3px solid #dc3545'; }

              return (
                <div className="col-6 col-md-4 col-lg-3" key={card.id}>
                  <div className={`card h-100 shadow-sm transition-all rounded-4 ${cardClasses}`} style={cardStyles} onClick={() => handleCardClick(card)}>
                    <div className="card-body d-flex align-items-center justify-content-center p-3 text-wrap" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{card.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default MatchMode;
````

## File: src/components/Navbar.jsx
````javascript
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { VocabContext } from '../context/VocabContext';

function Navbar() {
  const location = useLocation();
  const { studyProgress } = useContext(VocabContext);

  const navItems = [
    { path: "/", label: "Thư viện", icon: "📚" },
    { path: "/flashcards", label: "Flashcards", icon: "🗂️" },
    { path: "/learn", label: "Học", icon: "🧠" },
    { path: "/test", label: "Kiểm tra", icon: "📝" },
    { path: "/match", label: "Ghép thẻ", icon: "🎮" },
    { path: "/exam", label: "Thi trắc nghiệm", icon: "⏱️" }
  ];

  return (
    <nav className="app-navigation print-d-none">
      {/* Header Logo */}
      <Link className="nav-brand-desktop d-none d-lg-flex align-items-center mb-5 text-white text-decoration-none" to="/">
        <img src="/sea_15651557.ico" alt="Logo" width="40" height="40" className="bg-white rounded-circle p-1 shadow-sm" style={{ minWidth: '40px' }} />
        <h3 className="fw-bold mb-0 ms-3 nav-text">Scofield</h3>
      </Link>
      
      {/* Danh sách Menu */}
      <div className="nav-menu d-flex flex-lg-column flex-row w-100 justify-content-around justify-content-lg-start">
        {navItems.map(item => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} className={`nav-link-custom ${isActive ? 'active' : ''}`}>
              <span className="nav-icon">{item.icon}</span>
              <span className="d-none d-lg-block fw-bold nav-text">{item.label}</span>
              <span className="d-lg-none mobile-label">{item.label.split(' ')[0]}</span>
            </Link>
          );
        })}
      </div>

      {/* Thanh tiến độ tổng */}
      <div className="mt-auto d-none d-lg-block w-100 pb-3 progress-wrapper">
        <div className="d-flex justify-content-between text-white-50 small mb-2 fw-bold px-1 nav-text w-100">
          <span>Tiến độ học</span>
          <span>{studyProgress || 0}%</span>
        </div>
        <div className="progress rounded-pill shadow-sm" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.15)' }}>
          <div className="progress-bar bg-warning rounded-pill" role="progressbar" style={{ width: `${studyProgress}%` }}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
````

## File: src/components/TestMode.jsx
````javascript
import React, { useState, useEffect, useContext } from 'react';
import { VocabContext } from '../context/VocabContext';
import { toast } from 'react-toastify';
import confetti from 'canvas-confetti';
import api from '../api/axiosConfig';
import TestSetup from './TestSetup';
import TestResult from './TestResult';

function TestMode() {
  const { sets, allVocabs, loading, fetchSets, fetchAllVocabs } = useContext(VocabContext);
  const [selectedSetId, setSelectedSetId] = useState('all');

  useEffect(() => {
    fetchSets();
    fetchAllVocabs();
  }, [fetchSets, fetchAllVocabs]);
  const [poolSize, setPoolSize] = useState(0);

  const [questions, setQuestions] = useState([]);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const [questionCount, setQuestionCount] = useState(10);
  const [askType, setAskType] = useState('meaning'); 
  const [questionFormat, setQuestionFormat] = useState('choice'); 

  useEffect(() => {
    if (selectedSetId === 'all') {
      setPoolSize(allVocabs.length);
      if (allVocabs.length < questionCount) setQuestionCount(allVocabs.length || 10);
    } else {
      const targetSet = sets.find(s => s.id === parseInt(selectedSetId));
      if (targetSet) {
        setPoolSize(targetSet.vocabularies.length);
        if (targetSet.vocabularies.length < questionCount) setQuestionCount(targetSet.vocabularies.length);
      }
    }
  }, [selectedSetId, allVocabs, sets, questionCount]);

  const generateTest = () => {
    let pool = [];
    if (selectedSetId === 'all') {
      pool = allVocabs;
    } else {
      const targetSet = sets.find(s => s.id === parseInt(selectedSetId));
      if (targetSet) pool = targetSet.vocabularies;
    }

    if (pool.length === 0) {
      toast.warning("Học phần này chưa có từ vựng nào!");
      return;
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selectedVocabs = shuffled.slice(0, Math.min(questionCount, pool.length));

    const newQuestions = selectedVocabs.map((vocab) => {
      let type = questionFormat;
      if (questionFormat === 'mixed') {
        type = Math.random() > 0.5 ? 'choice' : 'typing';
      }

      const questionText = askType === 'meaning' ? vocab.meaning : vocab.word;
      const correctAnswer = askType === 'meaning' ? vocab.word : vocab.meaning;
      
      let options = [];
      if (type === 'choice') {
        // Thuật toán tạo nhiễu thông minh
        const scoredAnswers = allVocabs
          .filter(v => v.id !== vocab.id)
          .map(v => {
            let score = 0;
            const targetChars = vocab.word.split('');
            targetChars.forEach(c => {
              if (v.word.includes(c)) score += 1;
            });
            score += Math.random() * 0.5;
            return { ...v, score };
          });
          
        scoredAnswers.sort((a, b) => b.score - a.score);
        const wrongAnswers = scoredAnswers.slice(0, 3).map(v => askType === 'meaning' ? v.word : v.meaning);
        
        options = [...wrongAnswers, correctAnswer].sort(() => 0.5 - Math.random());
      }

      return {
        id: vocab.id,
        type,
        questionText,
        correctAnswer,
        options,
        userAnswer: '',
        isCorrect: null
      };
    });

    setQuestions(newQuestions);
    setIsTestStarted(true);
    setIsTestFinished(false);
  };

  const handleAnswerChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].userAnswer = value;
    setQuestions(updatedQuestions);
  };

  const submitTest = () => {
    const answeredCount = questions.filter(q => q.userAnswer.trim() !== '').length;
    
    // MỤC 16: Chống nộp bài rỗng
    if (answeredCount === 0) {
      toast.error("Vui lòng trả lời ít nhất 1 câu trước khi nộp bài!");
      return;
    }

    // MỤC 13: Cảnh báo bỏ sót câu hỏi
    if (answeredCount < questions.length) {
      const confirmSubmit = window.confirm(`Bạn mới hoàn thành ${answeredCount}/${questions.length} câu. Bạn có chắc chắn muốn nộp bài?`);
      if (!confirmSubmit) return;
    }

    let correctCount = 0;
    const gradedQuestions = questions.map(q => {
      const isCorrect = q.userAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
      if (isCorrect) correctCount++;
      return { ...q, isCorrect };
    });

    setQuestions(gradedQuestions);
    setScore({ correct: correctCount, total: gradedQuestions.length });
    setIsTestFinished(true);
    window.scrollTo(0, 0);
    
    // Bắn pháo giấy nếu điểm >= 80%
    if (correctCount / gradedQuestions.length >= 0.8) {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }
  };

  if (loading) return (
    <div className="container mt-5 text-center" style={{ maxWidth: '850px' }}>
      <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }} role="status"></div>
      <h5 className="text-muted fw-bold">Đang tải dữ liệu...</h5>
    </div>
  );

  if (!isTestStarted) {
    return (
      <TestSetup 
        sets={sets} selectedSetId={selectedSetId} setSelectedSetId={setSelectedSetId}
        questionCount={questionCount} setQuestionCount={setQuestionCount} poolSize={poolSize}
        questionFormat={questionFormat} setQuestionFormat={setQuestionFormat}
        askType={askType} setAskType={setAskType} generateTest={generateTest}
      />
    );
  }

  const handleCreateMistakeSet = async () => {
    const wrongQs = questions.filter(q => !q.isCorrect);
    if (wrongQs.length === 0) return;
    
    const title = window.prompt("Nhập tên học phần ôn tập:", "Ôn tập câu sai - Bài Test");
    if (!title || !title.trim()) return;

    const rawText = wrongQs.map(q => `${q.questionText} | ${q.correctAnswer}`).join('\n');
    try {
      await api.post("/vocabularies/bulk-import", { title: title.trim(), raw_text: rawText });
      toast.success(`Đã tạo học phần: ${title}`);
    } catch (error) {
      toast.error("Lỗi khi tạo học phần ôn tập");
    }
  };

  if (isTestFinished) {
    return <TestResult score={score} questions={questions} onRestart={() => setIsTestStarted(false)} onCreateMistakeSet={handleCreateMistakeSet} />;
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '800px' }}>
      <h3 className="mb-4 fw-bold text-center">Bài Kiểm Tra ({questions.length} câu)</h3>
      {questions.map((q, idx) => (
        <div key={idx} className="card shadow-sm border-0 mb-4 rounded-4">
          <div className="card-body p-5">
            <h4 className="mb-4 fw-bold">
              <span className="badge bg-primary me-3">Câu {idx + 1}</span> 
              {q.questionText}
            </h4>

            {q.type === 'choice' ? (
              <div className="row g-3">
                {q.options.map((opt, oIdx) => (
                  <div className="col-sm-6" key={oIdx}>
                    <div className={`form-check border rounded-3 p-3 h-100 fs-5 ${q.userAnswer === opt ? 'bg-light border-primary' : ''}`}>
                      <input 
                        className="form-check-input ms-0 me-3" 
                        type="radio" 
                        name={`question-${idx}`} 
                        id={`q${idx}-opt${oIdx}`}
                        value={opt}
                        checked={q.userAnswer === opt}
                        onChange={(e) => handleAnswerChange(idx, e.target.value)}
                      />
                      <label className="form-check-label w-100 fw-bold" htmlFor={`q${idx}-opt${oIdx}`} style={{ cursor: 'pointer' }}>
                        {opt}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <input 
                  type="text" 
                  className="form-control form-control-lg py-3 bg-light border-0 fw-bold d-print-none" 
                  placeholder="Nhập câu trả lời của bạn..."
                  value={q.userAnswer}
                  onChange={(e) => handleAnswerChange(idx, e.target.value)}
                  autoComplete="off"
                />
                <div className="print-blank-line d-none d-print-block"></div>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="text-center mt-5 mb-5">
        <button className="btn btn-primary btn-lg px-5 py-3 fw-bold w-100 shadow" onClick={submitTest}>
          Nộp bài ngay
        </button>
      </div>
    </div>
  );
}

export default TestMode;
````

## File: src/components/TestResult.jsx
````javascript
import React from 'react';

function TestResult({ score, questions, onRestart, onCreateMistakeSet }) {
  const percent = Math.round((score.correct / score.total) * 100);
  const wrongCount = score.total - score.correct;
  
  // Xác định màu sắc theo phần trăm
  const color = percent >= 80 ? 'var(--bs-success)' : percent >= 50 ? 'var(--bs-warning)' : 'var(--bs-danger)';

  return (
    <div className="container mt-5 print-container fade-in-slide" style={{ maxWidth: '800px' }}>
      <div className="card shadow-lg border-0 p-5 mb-5 text-center rounded-4 print-no-shadow bg-white position-relative overflow-hidden">
        <h3 className="fw-bold text-dark mb-5" style={{ zIndex: 2, position: 'relative' }}>Kết quả bài kiểm tra</h3>
        
        {/* Biểu đồ tròn CSS (Conic Gradient) */}
        <div className="mx-auto mb-4 position-relative d-flex justify-content-center align-items-center" 
             style={{ 
               width: '180px', height: '180px', 
               borderRadius: '50%', 
               background: `conic-gradient(${color} ${percent}%, #f0f0f0 ${percent}% 100%)`,
               boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
             }}>
          <div className="bg-white rounded-circle d-flex flex-column justify-content-center align-items-center" 
               style={{ width: '140px', height: '140px' }}>
            <h1 className="fw-bold mb-0" style={{ color: color, fontSize: '3rem' }}>{percent}%</h1>
          </div>
        </div>

        <p className="fs-5 fw-bold text-muted mb-5">Bạn trả lời đúng <strong>{score.correct} / {score.total}</strong> câu</p>
        
        <div className="d-flex flex-wrap justify-content-center gap-3 position-relative" style={{ zIndex: 2 }}>
          <button className="btn btn-outline-primary px-4 py-3 fw-bold rounded-pill" onClick={onRestart}>
            Làm bài test mới
          </button>
          {wrongCount > 0 && (
            <button className="btn btn-warning px-4 py-3 fw-bold text-white rounded-pill shadow-sm" onClick={onCreateMistakeSet}>
              ✨ Tạo bộ ôn tập từ {wrongCount} câu sai
            </button>
          )}
          <button className="btn btn-light px-4 py-3 fw-bold rounded-pill border shadow-sm" onClick={() => window.print()}>
            🖨️ In kết quả
          </button>
        </div>
      </div>

      <h4 className="mb-4 fw-bold">Chi tiết bài làm:</h4>
      {questions.map((q, idx) => (
        <div key={idx} className={`card mb-4 border-0 shadow-sm rounded-4 ${q.isCorrect ? 'bg-light' : 'bg-danger'}`} style={{ '--bs-bg-opacity': q.isCorrect ? 1 : 0.05, breakInside: 'avoid' }}>
          <div className="card-body p-4 p-md-5">
            <h5 className="card-title fw-bold mb-4" style={{ lineHeight: '1.5' }}>
              <span className={`badge me-2 ${q.isCorrect ? 'bg-success' : 'bg-danger'}`}>{idx + 1}</span> 
              {q.questionText}
            </h5>
            
            <div className="p-3 rounded-3 bg-white border shadow-sm mb-3">
              <span className="text-muted fw-bold d-block mb-1 fs-6">Lựa chọn của bạn:</span> 
              <span className={`fs-5 ${q.isCorrect ? 'text-success fw-bold' : 'text-danger fw-bold text-decoration-line-through'}`}>
                {q.userAnswer || '(Bỏ trống)'}
              </span>
            </div>

            {!q.isCorrect && (
              <div className="p-3 rounded-3 bg-white border border-success border-2 shadow-sm">
                <span className="text-success fw-bold d-block mb-1 fs-6">✓ Đáp án đúng:</span>
                <span className="text-dark fw-bold fs-5">{q.correctAnswer}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestResult;
````

## File: src/components/TestSetup.jsx
````javascript
import React from 'react';

function TestSetup({ sets, selectedSetId, setSelectedSetId, questionCount, setQuestionCount, poolSize, questionFormat, setQuestionFormat, askType, setAskType, generateTest }) {
  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm border-0 p-4 rounded-4">
        <h4 className="text-center mb-4 fw-bold">Thiết lập Bài Kiểm Tra</h4>
        
        <div className="mb-3">
          <label className="form-label fw-bold text-muted">Chọn học phần:</label>
          <select 
            className="form-select form-select-lg bg-light border-0" 
            value={selectedSetId} 
            onChange={(e) => setSelectedSetId(e.target.value)}
          >
            <option value="all">-- Tất cả từ vựng --</option>
            {sets.map(s => (
              <option key={s.id} value={s.id}>{s.title} ({s.vocabularies.length} từ)</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-muted">Số lượng câu hỏi:</label>
          <input 
            type="number" 
            className="form-control form-control-lg bg-light border-0 fw-bold" 
            value={questionCount} 
            onChange={(e) => setQuestionCount(Number(e.target.value))} 
            max={poolSize}
            min={1}
          />
          <small className="text-muted">Tối đa {poolSize} câu trong phần này.</small>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-muted">Hình thức kiểm tra:</label>
          <select 
            className="form-select form-select-lg bg-light border-0" 
            value={questionFormat} 
            onChange={(e) => setQuestionFormat(e.target.value)}
          >
            <option value="choice">100% Trắc nghiệm</option>
            <option value="typing">100% Tự luận (Gõ từ)</option>
            <option value="mixed">Hỗn hợp (50% Trắc nghiệm - 50% Tự luận)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label fw-bold text-muted">Chiều hiển thị câu hỏi:</label>
          <select 
            className="form-select form-select-lg bg-light border-0" 
            value={askType} 
            onChange={(e) => setAskType(e.target.value)}
          >
            <option value="meaning">Tiếng Việt (Hỏi Nghĩa, đáp Từ vựng)</option>
            <option value="word">Tiếng Nhật (Hỏi Từ vựng, đáp Nghĩa)</option>
          </select>
        </div>

        <button className="btn btn-primary btn-lg w-100 fw-bold" onClick={generateTest}>
          Bắt đầu làm bài
        </button>
      </div>
    </div>
  );
}

export default TestSetup;
````

## File: src/components/VocabularyList.jsx
````javascript
import React, { useState, useContext } from 'react';
import api from '../api/axiosConfig';
import AddVocabularyForm from './AddVocabularyForm';
import { VocabContext } from '../context/VocabContext';
import { toast } from 'react-toastify';
import LoadingSkeleton from './LoadingSkeleton';
import EmptyState from './EmptyState';

function VocabularyList() {
  const { sets, loading, fetchSets, hasMore } = useContext(VocabContext);
  
  const [expandedSetId, setExpandedSetId] = useState(null);
  const [viewMode, setViewMode] = useState('list'); 
  const [currentPath, setCurrentPath] = useState(""); 
  const [customFolders, setCustomFolders] = useState([]); // Trạng thái chứa thư mục trống vừa tạo

  React.useEffect(() => { fetchSets(); }, [fetchSets]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showOnlyStarred, setShowOnlyStarred] = useState(false);
  const [sortOption, setSortOption] = useState('newest'); 

  const highlightText = (text, highlight) => {
    if (!highlight || !text) return text;
    const parts = text.toString().split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? <mark key={i} className="bg-warning px-1 rounded">{part}</mark> : part)}</span>;
  };

  const calculateProgress = (vocabularies) => {
    if (!vocabularies || vocabularies.length === 0) return 0;
    const learned = vocabularies.filter(v => v.repetition > 0).length;
    return Math.round((learned / vocabularies.length) * 100);
  };

  const isSearching = searchTerm.trim().length > 0;
  let displaySets = [];
  let displayFolders = [];

  // Tổng hợp tất cả các thư mục có trong hệ thống (từ Data thật + Data vừa tạo)
  const allExistingFolders = Array.from(new Set([
    ...sets.map(s => s.folder_path).filter(p => p),
    ...customFolders
  ])).sort();

  if (isSearching) {
    displaySets = sets.map(set => {
      let filteredVocabs = set.vocabularies;
      if (showOnlyStarred) filteredVocabs = filteredVocabs.filter(v => v.is_starred);
      filteredVocabs = filteredVocabs.filter(v => 
        v.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
        v.meaning.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...set, vocabularies: filteredVocabs, progress: calculateProgress(set.vocabularies) };
    }).filter(set => set.title.toLowerCase().includes(searchTerm.toLowerCase()) || set.vocabularies.length > 0);
  } else {
    const currentLevelSets = [];
    const subfolders = new Set();

    const checkPathForFolders = (path) => {
      if (!path) return;
      if (path === currentPath) {
        // Thư mục hiện tại (Không làm gì cả)
      } else if (path.startsWith(currentPath ? currentPath + '/' : '')) {
        const remainingPath = currentPath ? path.substring(currentPath.length + 1) : path;
        const nextFolder = remainingPath.split('/')[0];
        if (nextFolder) subfolders.add(nextFolder);
      }
    };

    sets.forEach(set => {
      let isMatch = true;
      if (showOnlyStarred && !set.vocabularies.some(v => v.is_starred)) isMatch = false;
      if (!isMatch) return;

      const path = (set.folder_path || "").trim();
      if (path === currentPath) currentLevelSets.push(set); 
      checkPathForFolders(path);
    });

    // Gom cả các thư mục rỗng người dùng vừa tạo vào danh sách hiển thị
    customFolders.forEach(path => checkPathForFolders(path));

    displayFolders = Array.from(subfolders);
    displaySets = currentLevelSets.map(set => {
      let filteredVocabs = set.vocabularies;
      if (showOnlyStarred) filteredVocabs = filteredVocabs.filter(v => v.is_starred);
      
      if (sortOption === 'az') filteredVocabs.sort((a, b) => a.word.localeCompare(b.word));
      else if (sortOption === 'za') filteredVocabs.sort((a, b) => b.word.localeCompare(a.word));
      else filteredVocabs.sort((a, b) => b.id - a.id);

      return { ...set, vocabularies: filteredVocabs, progress: calculateProgress(set.vocabularies) };
    });
  }

  const [editingVocabId, setEditingVocabId] = useState(null);
  const [editWord, setEditWord] = useState('');
  const [editFurigana, setEditFurigana] = useState('');
  const [editMeaning, setEditMeaning] = useState('');
  const [addingToSetId, setAddingToSetId] = useState(null);
  const [newWord, setNewWord] = useState('');
  const [newFurigana, setNewFurigana] = useState('');
  const [newMeaning, setNewMeaning] = useState('');

  const toggleSet = (setId) => {
    if (viewMode === 'grid') setViewMode('list'); 
    setExpandedSetId(expandedSetId === setId ? null : setId);
    setAddingToSetId(null);
  };

  // Nút tạo thư mục trên màn hình chính
  const handleCreateFolder = () => {
    const newFolder = window.prompt("Nhập tên thư mục con mới:");
    if (newFolder && newFolder.trim()) {
      const folderName = newFolder.trim();
      const fullPath = currentPath ? `${currentPath}/${folderName}` : folderName;
      if (!customFolders.includes(fullPath) && !allExistingFolders.includes(fullPath)) {
        setCustomFolders([...customFolders, fullPath]);
        toast.success(`Đã tạo thư mục: ${folderName}`);
      } else {
        toast.warning("Thư mục này đã tồn tại!");
      }
    }
  };

  const handleDeleteSet = async (e, setId, setTitle) => {
    e.stopPropagation();
    if (window.confirm(`Xóa toàn bộ học phần "${setTitle}"?`)) {
      try { await api.delete(`/sets/${setId}`); toast.success("Đã xóa học phần!"); fetchSets(false, true); } 
      catch (error) { toast.error("Xóa thất bại!"); }
    }
  };

  const handleDeleteVocab = async (vocabId) => {
    if (window.confirm("Xóa từ này?")) {
      try { await api.delete(`/vocabularies/${vocabId}`); toast.success("Đã xóa từ vựng!"); fetchSets(false, true); } 
      catch (error) { toast.error("Lỗi xóa từ vựng"); }
    }
  };

  const handleEditClick = (vocab) => {
    setAddingToSetId(null);
    setEditingVocabId(vocab.id);
    setEditWord(vocab.word);
    setEditFurigana(vocab.furigana || '');
    setEditMeaning(vocab.meaning);
  };

  const handleSaveEdit = async (vocabId) => {
    try {
      await api.put(`/vocabularies/${vocabId}`, { word: editWord, furigana: editFurigana || null, meaning: editMeaning });
      setEditingVocabId(null); toast.success("Cập nhật thành công!"); fetchSets(false, true);
    } catch (error) { toast.error("Lỗi cập nhật"); }
  };

  const handleAddClick = (setId) => {
    setEditingVocabId(null); setAddingToSetId(setId); setNewWord(''); setNewFurigana(''); setNewMeaning('');
  };

  const handleSaveNew = async (setId) => {
    if (!newWord.trim() || !newMeaning.trim()) return toast.warning("Nhập đủ thông tin!");
    try {
      await api.post('/vocabularies', { word: newWord.trim(), furigana: newFurigana.trim() || null, meaning: newMeaning.trim(), set_id: setId });
      toast.success("Đã thêm từ vựng mới!"); setAddingToSetId(null); fetchSets(false, true);
    } catch (error) { toast.error("Lỗi thêm từ vựng!"); }
  };

  const handleToggleStarList = async (e, vocab) => {
    e.stopPropagation();
    try { await api.put(`/vocabularies/${vocab.id}/star`, { is_starred: !vocab.is_starred }); fetchSets(false, true); } 
    catch (error) { toast.error("Lỗi cập nhật sao"); }
  };

  const handleExportCSV = (e, set) => {
    e.stopPropagation();
    if (set.vocabularies.length === 0) return toast.warning("Học phần trống!");
    let csvContent = "Word,Furigana,Meaning\n";
    set.vocabularies.forEach(v => {
      let word = v.word.replace(/"/g, '""');
      let furigana = (v.furigana || "").replace(/"/g, '""');
      let meaning = v.meaning.replace(/"/g, '""');
      csvContent += `"${word}","${furigana}","${meaning}"\n`;
    });
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' }); 
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${set.title}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    toast.success(`Đã xuất CSV: ${set.title}`);
  };

  if (loading) return <LoadingSkeleton />;

  return (
    <div className="container-fluid mt-4 mx-auto" style={{ maxWidth: '1000px' }}>
      
      {/* Form Tạo Học Phần (Nhận context của thư mục hiện tại để set mặc định) */}
      <AddVocabularyForm 
        onAddSuccess={() => fetchSets(false, true)} 
        existingFolders={allExistingFolders} 
        currentPath={currentPath} 
      />

      {/* THANH TÌM KIẾM & LỌC */}
      <div className="d-flex flex-column flex-lg-row gap-3 mb-4 fade-in-slide align-items-lg-center">
        <div className="position-relative flex-grow-1">
          <span className="position-absolute top-50 translate-middle-y ms-4 fs-5 text-muted">🔍</span>
          <input 
            type="text" 
            className="form-control form-control-lg bg-white border-0 shadow-sm rounded-pill fw-bold text-primary w-100" 
            placeholder="Tìm kiếm từ vựng, ý nghĩa..." 
            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '3.5rem', height: '54px' }}
          />
        </div>
        <div className="d-flex flex-wrap flex-md-nowrap gap-3 justify-content-between">
          <select 
            className="form-select form-select-lg bg-white border-0 shadow-sm rounded-pill fw-bold text-muted custom-select-fix"
            value={sortOption} onChange={(e) => setSortOption(e.target.value)}
            style={{ height: '54px', minWidth: '160px', cursor: 'pointer' }}
          >
            <option value="newest">Mới nhất</option>
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
          </select>
          <button 
            className={`btn btn-lg fw-bold rounded-pill shadow-sm text-nowrap px-4 ${showOnlyStarred ? 'btn-warning text-white' : 'btn-white bg-white text-muted border-0'}`}
            onClick={() => setShowOnlyStarred(!showOnlyStarred)} style={{ height: '54px' }}
          >
            {showOnlyStarred ? '⭐ Lọc từ khó' : '☆ Lọc từ gắn sao'}
          </button>
          <div className="btn-group shadow-sm rounded-pill bg-white p-1 d-none d-md-flex align-items-center" style={{ height: '54px' }}>
            <button className={`btn rounded-pill border-0 fw-bold px-4 h-100 fs-5 ${viewMode === 'list' ? 'btn-primary' : 'bg-transparent text-muted'}`} onClick={() => setViewMode('list')}>≣</button>
            <button className={`btn rounded-pill border-0 fw-bold px-4 h-100 fs-5 ${viewMode === 'grid' ? 'btn-primary' : 'bg-transparent text-muted'}`} onClick={() => setViewMode('grid')}>⊞</button>
          </div>
        </div>
      </div>

      {/* THANH ĐIỀU HƯỚNG THƯ MỤC KÈM NÚT TẠO (BREADCRUMB) */}
      {!isSearching && (
        <div className="d-flex justify-content-between align-items-center mb-4 bg-white px-4 py-3 rounded-pill shadow-sm fade-in-slide">
          <div className="d-flex align-items-center flex-wrap gap-2">
            <button className={`btn btn-sm rounded-pill fw-bold ${currentPath === "" ? 'btn-primary shadow-sm' : 'btn-light'}`} onClick={() => setCurrentPath("")}>
              🏠 Gốc
            </button>
            {currentPath && currentPath.split('/').map((part, idx, arr) => {
              const pathToHere = arr.slice(0, idx + 1).join('/');
              const isLast = idx === arr.length - 1;
              return (
                <React.Fragment key={idx}>
                  <span className="text-muted fw-bold">/</span>
                  <button className={`btn btn-sm rounded-pill fw-bold ${isLast ? 'btn-primary shadow-sm' : 'btn-light'}`} onClick={() => setCurrentPath(pathToHere)}>
                    {part}
                  </button>
                </React.Fragment>
              )
            })}
          </div>
          
          {/* NÚT TẠO THƯ MỤC NẰM Ở ĐÂY */}
          <button className="btn btn-outline-primary btn-sm rounded-pill fw-bold px-3 d-flex align-items-center gap-2 transition-all hover-bg-light" onClick={handleCreateFolder}>
            <span className="fs-6">📁</span> <span className="d-none d-sm-block">Thư mục mới</span>
          </button>
        </div>
      )}

      {/* DANH SÁCH THƯ MỤC CON */}
      {!isSearching && displayFolders.length > 0 && (
        <div className="row g-3 mb-5 fade-in">
          {displayFolders.map(folderName => (
            <div key={folderName} className="col-6 col-md-4 col-lg-3">
              <div 
                className="card shadow-sm border-0 rounded-4 h-100 bg-white transition-all hover-bg-light" 
                style={{cursor: 'pointer'}}
                onClick={() => setCurrentPath(currentPath ? `${currentPath}/${folderName}` : folderName)}
              >
                <div className="card-body d-flex align-items-center gap-3 p-4">
                  <span className="fs-2">📁</span>
                  <h5 className="fw-bold mb-0 text-dark text-truncate w-100">{folderName}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DANH SÁCH HỌC PHẦN */}
      {sets.length === 0 ? (
        <EmptyState title="Thư viện trống" message="Chưa có học phần nào. Hãy tạo mới ở phần trên nhé!" />
      ) : displaySets.length === 0 && displayFolders.length === 0 ? (
        <div className="text-center text-muted mt-5 fw-bold fs-5">Khu vực này hiện đang trống.</div>
      ) : (
        <div className={viewMode === 'grid' ? 'row g-4' : ''}>
          {displaySets.map((vocabSet) => (
            <div key={vocabSet.id} className={viewMode === 'grid' ? 'col-md-6 col-xl-4' : 'mb-4'}>
              <div className="card shadow-sm border-0 rounded-4 h-100">
                <div 
                  className={`card-header bg-white p-4 border-0 rounded-4 d-flex ${viewMode === 'grid' ? 'flex-column align-items-start gap-3' : 'justify-content-between align-items-center'}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleSet(vocabSet.id)}
                >
                  <div className={viewMode === 'grid' ? 'w-100' : ''}>
                    <h5 className="mb-2 fw-bold text-dark text-truncate" title={vocabSet.title}>{vocabSet.title}</h5>
                    <span className="badge bg-light text-muted border px-2 py-1">{vocabSet.vocabularies.length} thuật ngữ</span>
                    
                    <div className={`mt-3 ${viewMode === 'list' ? 'd-none' : 'w-100'}`}>
                      <div className="d-flex justify-content-between text-muted fw-bold mb-2" style={{ fontSize: '0.8rem' }}>
                        <span>Tiến độ</span>
                        <span>{vocabSet.progress}%</span>
                      </div>
                      <div className="progress rounded-pill bg-light" style={{ height: '6px' }}>
                        <div className="progress-bar bg-success rounded-pill" style={{ width: `${vocabSet.progress}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className={`d-flex align-items-center gap-2 ${viewMode === 'grid' ? 'w-100 justify-content-between mt-2' : ''}`}>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-light text-danger fw-bold border-0 px-3 py-2" onClick={(e) => handleDeleteSet(e, vocabSet.id, vocabSet.title)}>🗑️ Xóa</button>
                    </div>
                    {viewMode === 'list' && (
                      <span className="text-muted fs-5 ms-3 bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width:'35px', height:'35px' }}>
                        {expandedSetId === vocabSet.id ? '▲' : '▼'}
                      </span>
                    )}
                  </div>
                </div>

                {expandedSetId === vocabSet.id && viewMode === 'list' && (
                  <div className="card-body p-0 border-top bg-light rounded-bottom-4 fade-in-slide">
                    <div className="list-group list-group-flush rounded-bottom-4">
                      
                      {vocabSet.vocabularies.length === 0 && addingToSetId !== vocabSet.id && (
                        <div className="text-center py-4 text-muted fst-italic border-bottom border-light">Học phần trống. Hãy thêm thẻ đầu tiên!</div>
                      )}

                      {vocabSet.vocabularies.map((vocab) => (
                        <div key={vocab.id} className="list-group-item bg-white p-4 border-bottom border-light">
                          {editingVocabId === vocab.id ? (
                            <div className="row g-2 align-items-center">
                              <div className="col-sm-4">
                                <input type="text" className="form-control bg-light border-0" value={editWord} onChange={(e) => setEditWord(e.target.value)} autoFocus placeholder="Thuật ngữ" />
                              </div>
                              <div className="col-sm-3">
                                <input type="text" className="form-control bg-light border-0" value={editFurigana} onChange={(e) => setEditFurigana(e.target.value)} placeholder="Phiên âm" />
                              </div>
                              <div className="col-sm-3">
                                <input type="text" className="form-control bg-light border-0" value={editMeaning} onChange={(e) => setEditMeaning(e.target.value)} placeholder="Định nghĩa" />
                              </div>
                              <div className="col-sm-2 text-end">
                                <button className="btn btn-success fw-bold me-2 px-3" onClick={() => handleSaveEdit(vocab.id)}>Lưu</button>
                                <button className="btn btn-secondary fw-bold px-3" onClick={() => setEditingVocabId(null)}>Hủy</button>
                              </div>
                            </div>
                          ) : (
                            <div className="row align-items-center">
                              <div className="col-sm-5 border-end border-2 border-light d-flex align-items-center gap-3">
                                <button 
                                  className="btn btn-light rounded-circle border-0 d-flex align-items-center justify-content-center p-0 shadow-sm"
                                  style={{ width: '40px', height: '40px', color: vocab.is_starred ? '#ffc107' : '#dee2e6', fontSize: '1.4rem' }}
                                  onClick={(e) => handleToggleStarList(e, vocab)}
                                >★</button>
                                <div className="ms-1 text-truncate">
                                  {vocab.furigana && <div className="text-muted fw-bold mb-1" style={{ fontSize: '0.9rem' }}>{vocab.furigana}</div>}
                                  <div className="fw-bold fs-5 text-dark">{highlightText(vocab.word, searchTerm)}</div>
                                </div>
                              </div>
                              <div className="col-sm-5 text-dark ps-4 text-truncate fs-5">
                                {highlightText(vocab.meaning, searchTerm)}
                              </div>
                              <div className="col-sm-2 text-end">
                                <button className="btn btn-sm btn-light text-primary fw-bold px-3 py-2 me-2" onClick={() => handleEditClick(vocab)}>✏️ Sửa</button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}

                      {addingToSetId === vocabSet.id ? (
                        <div className="list-group-item bg-white p-4 border-top border-primary border-2">
                          <div className="row g-2 align-items-center">
                            <div className="col-sm-4">
                              <input type="text" className="form-control bg-light border-0" value={newWord} onChange={(e) => setNewWord(e.target.value)} autoFocus placeholder="Từ vựng mới" />
                            </div>
                            <div className="col-sm-3">
                              <input type="text" className="form-control bg-light border-0" value={newFurigana} onChange={(e) => setNewFurigana(e.target.value)} placeholder="Phiên âm (Tùy chọn)" />
                            </div>
                            <div className="col-sm-3">
                              <input type="text" className="form-control bg-light border-0" value={newMeaning} onChange={(e) => setNewMeaning(e.target.value)} placeholder="Định nghĩa" />
                            </div>
                            <div className="col-sm-2 text-end">
                              <button className="btn btn-primary fw-bold me-2 px-3" onClick={() => handleSaveNew(vocabSet.id)}>Lưu</button>
                              <button className="btn btn-secondary fw-bold px-3" onClick={() => setAddingToSetId(null)}>Hủy</button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="list-group-item bg-light p-3 text-center border-0 rounded-bottom-4">
                          <button 
                            className="btn btn-outline-primary fw-bold rounded-pill px-4" 
                            style={{ borderStyle: 'dashed', borderWidth: '2px' }}
                            onClick={() => handleAddClick(vocabSet.id)}
                          >
                            + Thêm thẻ mới
                          </button>
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {hasMore && sets.length > 0 && !searchTerm && (
        <div className="text-center mt-5 mb-5">
          <button className="btn btn-outline-primary px-5 py-3 fs-5 fw-bold rounded-pill shadow-sm" onClick={() => fetchSets(true)}>
            Tải thêm học phần cũ ↓
          </button>
        </div>
      )}  
    </div>
  );
}

export default VocabularyList;
````

## File: src/context/VocabContext.jsx
````javascript
import React, { createContext, useState, useCallback } from 'react';
import api from '../api/axiosConfig';

export const VocabContext = createContext();

export const VocabProvider = ({ children }) => {
  const [sets, setSets] = useState([]);
  const [allVocabs, setAllVocabs] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const LIMIT = 10;
  const [studyProgress, setStudyProgress] = useState(0);

  const [hasFetchedSets, setHasFetchedSets] = useState(false);
  const [hasFetchedVocabs, setHasFetchedVocabs] = useState(false);

  const fetchSets = useCallback(async (isLoadMore = false, forceRefresh = false) => {
    if (hasFetchedSets && !isLoadMore && !forceRefresh) return;
    if (!isLoadMore) setLoading(true);
    try {
      const currentSkip = isLoadMore ? (page + 1) * LIMIT : 0;
      const res = await api.get(`/sets?skip=${currentSkip}&limit=${LIMIT}`);
      if (isLoadMore) {
        setSets(prev => [...prev, ...res.data]);
        setPage(page + 1);
      } else {
        setSets(res.data);
        setPage(0);
      }
      setHasMore(res.data.length === LIMIT);
      setHasFetchedSets(true);
    } catch (error) {
      console.error("Lỗi khi tải danh sách học phần:", error);
    } finally {
      if (!isLoadMore) setLoading(false);
    }
  }, [hasFetchedSets, page]);

  const fetchAllVocabs = useCallback(async (forceRefresh = false) => {
    if (hasFetchedVocabs && !forceRefresh) return;
    setLoading(true);
    try {
      const res = await api.get('/vocabularies');
      setAllVocabs(res.data);
      setHasFetchedVocabs(true);
    } catch (error) {
      console.error("Lỗi khi tải tất cả từ vựng:", error);
    } finally {
      setLoading(false);
    }
  }, [hasFetchedVocabs]);

  return (
    <VocabContext.Provider value={{ sets, allVocabs, loading, fetchSets, fetchAllVocabs, hasMore, studyProgress, setStudyProgress }}>
      {children}
    </VocabContext.Provider>
  );
};
````

## File: src/pages/HomePage.jsx
````javascript
import React from 'react';
import Dashboard from '../components/Dashboard';
import VocabularyList from '../components/VocabularyList';

function HomePage() {
  return (
    <>
      <Dashboard />
      <hr className="my-5 opacity-25" style={{ maxWidth: '850px', margin: '0 auto' }} />
      <VocabularyList />
    </>
  );
}

export default HomePage;
````

## File: src/pages/NotFound.jsx
````javascript
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 fw-bold text-primary" style={{ fontSize: '6rem' }}>404</h1>
      <h3 className="mb-4 fw-bold text-dark">Trang không tồn tại</h3>
      <p className="text-muted mb-5 fs-5">Đường dẫn bạn truy cập không đúng hoặc đã bị xóa khỏi hệ thống.</p>
      <Link to="/" className="btn btn-primary px-5 py-3 fw-bold rounded-pill shadow-sm">
        ← Quay lại Trang chủ
      </Link>
    </div>
  );
}

export default NotFound;
````

## File: src/App.css
````css
body {
  background-color: #f6f7fb !important; 
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --bs-primary: #863bff;
  --bs-primary-rgb: 134, 59, 255;
  --sidebar-width: 260px;
  --bottom-nav-height: 75px;
}

/* --- KIẾN TRÚC LAYOUT MỚI (SIDEBAR & BOTTOM NAV) --- */
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: #f6f7fb;
}

.main-content {
  flex-grow: 1;
  margin-left: var(--sidebar-width);
  min-height: 100vh;
  transition: margin 0.3s ease;
}

/* --- KIẾN TRÚC LAYOUT MỚI (MINI-SIDEBAR & BOTTOM NAV) --- */
:root {
  --bs-primary: #863bff;
  --bs-primary-rgb: 134, 59, 255;
  --sidebar-collapsed: 85px; /* Chiều rộng khi thu gọn (chỉ hiện icon) */
  --sidebar-expanded: 260px; /* Chiều rộng khi hover */
  --bottom-nav-height: 75px;
}

.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: #f6f7fb;
}

.main-content {
  flex-grow: 1;
  margin-left: var(--sidebar-collapsed); /* Chỉ chừa khoảng nhỏ cho icon bên trái */
  min-height: 100vh;
  /* Chú ý: Cố định margin, khi menu bung ra sẽ trượt "lên trên" màn hình chính */
}

/* Sidebar Desktop */
.app-navigation {
  width: var(--sidebar-collapsed);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--bs-primary);
  color: white;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  padding: 30px 15px; /* Căn chỉnh cho icon vào giữa */
  box-shadow: 4px 0 20px rgba(0,0,0,0.05);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease;
  overflow-x: hidden;
  white-space: nowrap;
}

/* Khi di chuột vào Menu */
.app-navigation:hover {
  width: var(--sidebar-expanded);
  padding: 30px 20px;
  box-shadow: 10px 0 30px rgba(0,0,0,0.15); /* Làm bóng đậm hơn để tạo cảm giác nổi */
}

/* Logic ẩn hiện Text trong Menu */
.nav-text {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
}
.progress-wrapper {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
}

.app-navigation:hover .nav-text,
.app-navigation:hover .progress-wrapper {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.1s;
}

/* Style nút bấm trong Menu */
.nav-link-custom {
  display: flex;
  align-items: center;
  padding: 14px 10px; /* Bo gọn khi bị thu nhỏ */
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  border-radius: 16px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;
}

.nav-icon {
  font-size: 1.5rem;
  min-width: 35px; /* Giữ icon cố định không bị xô lệch text */
  text-align: center;
}

.app-navigation:hover .nav-link-custom {
  padding: 14px 15px; /* Trả lại padding thoải mái khi mở rộng */
}

.nav-link-custom:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}
.app-navigation:hover .nav-link-custom:hover {
  transform: translateX(5px);
}

.nav-link-custom.active {
  background-color: white;
  color: var(--bs-primary) !important;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

/* Bottom Nav Mobile (Giữ nguyên) */
@media (max-width: 991px) {
  .main-content {
    margin-left: 0;
    padding-bottom: calc(var(--bottom-nav-height) + 20px);
  }
  .app-navigation {
    width: 100%;
    height: var(--bottom-nav-height);
    top: auto;
    bottom: 0;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    border-radius: 24px 24px 0 0;
    box-shadow: 0 -4px 25px rgba(0,0,0,0.15);
    background-color: rgba(134, 59, 255, 0.98);
    backdrop-filter: blur(10px);
  }
  .app-navigation:hover {
    width: 100%;
    padding: 0 10px;
  }
  .nav-link-custom, .app-navigation:hover .nav-link-custom {
    flex-direction: column;
    gap: 4px;
    padding: 10px 0;
    margin-bottom: 0;
    border-radius: 16px;
    width: 60px;
    justify-content: center;
    transform: none !important;
  }
  .nav-link-custom:hover { background-color: transparent; }
  .nav-link-custom.active { background-color: rgba(255,255,255,0.2); color: white !important; box-shadow: none; }
  .nav-text { opacity: 1; visibility: visible; display: none; } 
  .mobile-label { font-size: 0.65rem; font-weight: 700; display: block; }
}

/* Bottom Nav Mobile */
@media (max-width: 991px) {
  .main-content {
    margin-left: 0;
    padding-bottom: calc(var(--bottom-nav-height) + 20px);
  }
  
  .app-navigation {
    width: 100%;
    height: var(--bottom-nav-height);
    top: auto;
    bottom: 0;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    border-radius: 24px 24px 0 0;
    box-shadow: 0 -4px 25px rgba(0,0,0,0.15);
    background-color: rgba(134, 59, 255, 0.98);
    backdrop-filter: blur(10px);
  }

  .nav-link-custom {
    flex-direction: column;
    gap: 4px;
    padding: 10px 0;
    margin-bottom: 0;
    border-radius: 16px;
    width: 60px;
    justify-content: center;
    transform: none !important;
  }

  .nav-link-custom:hover { background-color: transparent; }
  .nav-link-custom.active { background-color: rgba(255,255,255,0.2); color: white !important; box-shadow: none; }
  .nav-icon { font-size: 1.5rem; }
  .mobile-label { font-size: 0.65rem; font-weight: 700; }
}

/* --- CARDS & BUTTONS --- */
.card {
  border: none !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04) !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08) !important;
}

.bg-primary { background-color: #863bff !important; }
.text-primary { color: #863bff !important; }
.border-primary { border-color: #863bff !important; }

.btn { border-radius: 8px !important; font-weight: 600 !important; }
.btn-primary { background-color: #863bff !important; border-color: #863bff !important; color: #ffffff !important; }
.btn-primary:hover { background-color: #6b21e3 !important; }
.btn-outline-primary { color: #863bff !important; border-color: #863bff !important; }
.btn-outline-primary:hover { background-color: #863bff !important; color: #ffffff !important; }

/* --- ANIMATIONS --- */
.fade-in { animation: fadeIn 0.3s ease-in-out forwards; }
.fade-in-slide { animation: fadeInSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeInSlide { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }

.shake { animation: shakeError 0.4s ease-in-out; }
@keyframes shakeError {
  0%, 100% { transform: translateX(0); }
  25%, 75% { transform: translateX(-8px); }
  50% { transform: translateX(8px); }
}

/* --- FLASHCARDS & MATCH --- */
.flashcard-container {
  perspective: 1000px; width: 100%; max-width: 450px; aspect-ratio: 1 / 1; margin: 0 auto; cursor: pointer;
}
.flashcard-inner {
  position: relative; width: 100%; height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); border-radius: 24px;
}
.flashcard-inner.flipped { transform: rotateY(180deg); }
.flashcard-front, .flashcard-back {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  -webkit-backface-visibility: hidden; backface-visibility: hidden;
  display: flex; align-items: center; justify-content: center;
  font-size: clamp(1.2rem, 5vw, 2.2rem); font-weight: bold; border-radius: 24px;
  border: 2px solid #e7e7e9; padding: 30px; text-align: center; box-sizing: border-box;
}
.flashcard-front { background-color: #ffffff; color: #333; }
.flashcard-back { background-color: #863bff; color: #ffffff; transform: rotateY(180deg); border-color: #863bff; }

.match-card { min-height: 100px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.1rem; font-weight: 500; text-align: center; padding: 15px; }
.match-card.selected { border: 3px solid #863bff !important; background-color: #f4ebff !important; }
.match-card.correct { visibility: hidden; opacity: 0; transition: visibility 0s 0.3s, opacity 0.3s linear; }

.text-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* --- CSS RIÊNG CHO IN ẤN --- */
@media print {
  body { background-color: #fff !important; }
  .app-navigation, .d-print-none, .btn { display: none !important; }
  .main-content { margin-left: 0 !important; padding: 0 !important; }
  .app-layout { background-color: white !important; }
  .card { box-shadow: none !important; border: 1px solid #ddd !important; break-inside: avoid; }
  .container { max-width: 100% !important; width: 100% !important; margin: 0 !important; padding: 0 !important; }
  .print-no-shadow { box-shadow: none !important; border: none !important; }
  .print-blank-line { border-bottom: 1px dashed #999; height: 30px; margin-top: 10px; width: 100%; }
}

/* --- SỬA LỖI GIAO DIỆN TÌM KIẾM & LỌC --- */
.custom-select-fix {
  padding-right: 2.5rem !important; /* Đẩy chữ tránh xa mũi tên */
  background-position: right 1rem center !important; /* Căn chỉnh lại mũi tên thả xuống */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-align: center;
  text-align-last: center; /* Ép chữ Select ra giữa */
}

/* Ẩn dấu trang trí mặc định của trình duyệt để dùng icon Bootstrap */
.custom-select-fix::-ms-expand {
  display: none;
}

/* --- STREAK & COMBO ANIMATIONS --- */
.streak-indicator {
  transition: border-color 0.3s ease, transform 0.2s ease;
}

/* Hiệu ứng tỏa sáng lan tỏa khi chuỗi đạt mốc 5 (Đang bốc cháy) */
.streak-glow {
  animation: pulseGlow 1.5s infinite;
}

@keyframes pulseGlow {
  0% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.5); }
  70% { box-shadow: 0 0 0 12px rgba(220, 53, 69, 0); }
  100% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0); }
}

/* Thanh thời gian rút cạn đồng bộ đúng 2.5s (Khớp logic MatchMode) */
.combo-timer-bar {
  width: 100%;
  animation: comboDrain 2.5s linear forwards;
  transform-origin: left;
}

@keyframes comboDrain {
  0% { transform: scaleX(1); }
  100% { transform: scaleX(0); }
}
````

## File: src/App.jsx
````javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FlashcardMode from "./components/FlashcardMode";
import LearnMode from "./components/LearnMode";
import TestMode from "./components/TestMode";
import MatchMode from "./components/MatchMode";
import ExamMode from './components/ExamMode';
import NotFound from "./pages/NotFound";
import { VocabProvider } from "./context/VocabContext";

function App() {
  return (
    <VocabProvider>
      <BrowserRouter>
        <div className="app-layout">
          <Navbar />
          <main className="main-content">
            {/* Đã xóa <Breadcrumbs /> theo yêu cầu */}
            <div className="container-fluid py-4" style={{ maxWidth: '1200px' }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/flashcards" element={<FlashcardMode />} />
                <Route path="/learn" element={<LearnMode />} />
                <Route path="/test" element={<TestMode />} />
                <Route path="/match" element={<MatchMode />} />
                <Route path="/exam" element={<ExamMode />} /> 
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
      </BrowserRouter>
    </VocabProvider>
  );
}

export default App;
````

## File: src/index.css
````css
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
````

## File: src/index.js
````javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
````

## File: src/main.jsx
````javascript
import React from "react";
import ReactDOM from "react-dom/client";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: .oxlintrc.json
````json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
````

## File: index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/icons8-crab-16.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scofield</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.3.2/zephyr/bootstrap.min.css">
    
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
````

## File: package.json
````json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.18.1",
    "bootstrap": "^5.3.8",
    "canvas-confetti": "^1.9.4",
    "react": "^19.2.7",
    "react-bootstrap": "^2.10.10",
    "react-dom": "^19.2.7",
    "react-router-dom": "^7.18.1",
    "react-toastify": "^11.1.0"
  },
  "devDependencies": {
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.3",
    "oxlint": "^1.71.0",
    "vite": "^8.1.1"
  }
}
````

## File: README.md
````markdown
# Quizlet Clone

Ứng dụng học từ vựng kiểu Quizlet với giao diện tối ưu và nhiều tính năng tương tác:
- **Quản lý học phần:** Tìm kiếm từ vựng, import nhanh qua văn bản thô hoặc **Import/Export file CSV**.
- **Chế độ học đa dạng:** Flashcards (tích hợp tự động phát âm), Học (trắc nghiệm & tự luận), Ghép thẻ (Match game), Thi trắc nghiệm (Exam).
- **Trải nghiệm người dùng (UX):** Hiệu ứng chuyển cảnh mượt mà, rung lắc báo sai, pháo giấy chúc mừng, Loading Skeleton & Empty State chuyên nghiệp.
- **Dashboard thống kê:** Trực quan hóa dữ liệu học tập và biểu đồ tiến độ điểm số các lần thi.

- **Backend:** FastAPI + SQLAlchemy + Alembic + MySQL (tích hợp Pydantic validation)
- **Frontend:** React (Vite) + React Router + Axios + Bootstrap

Tài liệu này hướng dẫn cài đặt **từ đầu trên một máy hoàn toàn mới** (chưa có Python, Node, MySQL...).

---

## 1. Cài đặt công cụ nền tảng

Cài lần lượt các phần mềm sau nếu máy chưa có:

| Công cụ | Phiên bản gợi ý | Kiểm tra sau khi cài |
|---|---|---|
| Python | 3.10 – 3.12 | `python --version` |
| Node.js | 18 LTS trở lên (kèm npm) | `node -v` và `npm -v` |
| MySQL Server | 8.0 trở lên | `mysql --version` |
| Git (tuỳ chọn) | mới nhất | `git --version` |

- Python: tải tại python.org/downloads. Khi cài trên Windows, nhớ tick **Add python.exe to PATH**.
- Node.js: tải bản LTS tại nodejs.org.
- MySQL: tải **MySQL Installer** (Windows) hoặc dùng gói `mysql-server` (Linux) tại dev.mysql.com/downloads/installer. Trong lúc cài, đặt mật khẩu cho user `root` và **nhớ lại mật khẩu này**.

Sau khi cài xong, mở terminal/CMD mới rồi gõ 3 lệnh kiểm tra ở bảng trên để chắc chắn đều nhận lệnh.

---

## 2. Tạo cơ sở dữ liệu MySQL

Mở terminal, đăng nhập MySQL bằng user root:

```bash
mysql -u root -p
```

Nhập mật khẩu root đã đặt lúc cài, sau đó tạo database và (khuyến nghị) một user riêng cho ứng dụng:

```sql
CREATE DATABASE quizlet_clone CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER 'quizlet_user'@'localhost' IDENTIFIED BY 'MatKhauCuaBan123!';
GRANT ALL PRIVILEGES ON quizlet_clone.* TO 'quizlet_user'@'localhost';
FLUSH PRIVILEGES;

EXIT;
```

Bạn có thể đổi tên database/user/mật khẩu tuỳ ý, chỉ cần dùng đúng giá trị đó ở bước cấu hình `.env` bên dưới. Không cần tự tạo bảng — Alembic ở bước 3 sẽ tự tạo toàn bộ bảng.

---

## 3. Cài đặt Backend (FastAPI + MySQL)

```bash
cd backend
python -m venv venv
```

Kích hoạt môi trường ảo:

```bash
# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate
```

Cài thư viện:

```bash
pip install -r requirements.txt
```

### Tạo file `.env`

Tạo file `.env` trong thư mục `backend` (cùng cấp với `main.py`) với nội dung sau, thay giá trị theo database bạn tạo ở bước 2:

```env
DB_USER=quizlet_user
DB_PASSWORD=MatKhauCuaBan123!
DB_HOST=localhost
DB_PORT=3306
DB_NAME=quizlet_clone
```

Đây là các biến mà `database.py` và `alembic/env.py` đọc để dựng chuỗi kết nối `mysql+pymysql://...`.

### Chạy migration để tạo bảng

```bash
alembic upgrade head
```

Lệnh này tạo toàn bộ bảng: `sets`, `vocabularies`, `exams`, `exam_questions`, `exam_histories` dựa theo các revision có sẵn trong `alembic/versions`.

### Chạy server backend

```bash
uvicorn main:app --reload --port 8000
```

- API chạy tại: `http://localhost:8000`
- Swagger docs: `http://localhost:8000/docs`

---

## 4. Cài đặt Frontend (React + Vite)

Mở một terminal **mới** (giữ terminal backend đang chạy), rồi:

```bash
cd frontend
npm install
```

### Cấu hình kết nối tới backend

File `src/api/axiosConfig.js` hiện có `baseURL` để trống. Trên máy mới, mở file này và trỏ về backend:

```js
const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: { "Content-Type": "application/json" },
});
```

### Chạy frontend

```bash
npm run dev
```

Vite mặc định chạy ở: `http://localhost:5173`

---

## 5. Build frontend để backend tự phục vụ (tuỳ chọn)

```bash
cd frontend
npm run build
```

Sau khi build xong sẽ có thư mục `frontend/dist`. Copy thư mục `dist` này vào đúng vị trí mà `backend/main.py` đang trỏ tới (thư mục `dist` cạnh `main.py`), sau đó chỉ cần chạy backend (`uvicorn main:app`) và truy cập `http://localhost:8000` là dùng được cả frontend lẫn API.

---

## 6. Công cụ hỗ trợ khác (tuỳ chọn)

### Xuất mã nguồn dạng markdown bằng Repomix

```bash
npx repomix frontend --style markdown --output repomix-frontend.md
npx repomix backend --style markdown --output repomix-backend.md
```

### Chia sẻ backend ra Internet tạm thời bằng Cloudflare Tunnel

```bash
cloudflared tunnel --url http://localhost:8000
```

---

## 7. Xử lý lỗi thường gặp

- **`ModuleNotFoundError` khi chạy uvicorn:** quên kích hoạt `venv` hoặc quên `pip install -r requirements.txt`.
- **`sqlalchemy.exc.OperationalError: (2003, "Can't connect to MySQL server")`:** MySQL Server chưa bật.
- **`Access denied for user`:** sai `DB_USER`/`DB_PASSWORD` trong `.env`, hoặc chưa `GRANT PRIVILEGES` cho user.
- **Frontend gọi API bị lỗi 404/Network Error:** kiểm tra lại `baseURL` trong `src/api/axiosConfig.js` và backend có đang chạy không.
- **Lỗi CORS trên console trình duyệt:** đảm bảo frontend chạy đúng cổng 5173 hoặc 3000, hoặc thêm cổng bạn dùng vào danh sách `origins` trong `backend/main.py`.

---

## 8. Tóm tắt lệnh chạy hằng ngày (khi đã cài xong)

```bash
# Terminal 1 - backend
cd backend
venv\Scripts\activate      # hoặc: source venv/bin/activate
uvicorn main:app --reload --port 8000

# Terminal 2 - frontend
cd frontend
npm run dev
```
````

## File: vite.config.js
````javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
````
