export default `
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  transform: translateY(-100%);
  transition: transform 0.5s 1.2s cubic-bezier(.7, .3, 0, 1);
}

.overlay.visible {
  transform: translateY(0);
  transition: transform 0.5s cubic-bezier(.7, .3, 0, 1);
}

.polygon {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 1;
  background: #eee;
  transition: -webkit-clip-path .6s .6s cubic-bezier(.7, .3, 0, 1), background .6s cubic-bezier(.7, .3, 0, 1);
}

.overlay.visible .polygon {
  background: #fff;
  transition: -webkit-clip-path .6s 0.5s cubic-bezier(.7, .3, 0, 1), background .6s 1.2s cubic-bezier(.7, .3, 0, 1);
}

.overlay .polygon:nth-child(1) {
  -webkit-clip-path: polygon(0% 0%, 50% 0, 50% 0%);
}
.overlay.visible .polygon:nth-child(1) {
  -webkit-clip-path: polygon(0% 0%, 50% 100%, 50% 0%);
}

.overlay .polygon:nth-child(2) {
  -webkit-clip-path: polygon(0% 100%, 0% 100%, 50% 100%);
}
.overlay.visible .polygon:nth-child(2) {
  -webkit-clip-path: polygon(0% 100%, 0% 0%, 50% 100%);
}

.overlay .polygon:nth-child(3) {
  -webkit-clip-path: polygon(100% 0%, 50% 0%, 50% 0%);
}
.overlay.visible .polygon:nth-child(3) {
  -webkit-clip-path: polygon(100% 0%, 50% 100%, 50% 0%);
}

.overlay .polygon:nth-child(4) {
  -webkit-clip-path: polygon(100% 100%, 100% 100%, 50% 100%);
}
.overlay.visible .polygon:nth-child(4) {
  -webkit-clip-path: polygon(100% 100%, 100% 0%, 50% 100%);
}`