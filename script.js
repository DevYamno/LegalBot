function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.hero-tabs a').forEach(a => a.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');

  return false;
}
