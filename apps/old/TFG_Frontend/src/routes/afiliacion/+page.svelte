<svelte:head>
  <title>Afiliarse</title>
</svelte:head>
<div>
  <h1 class="text-6xl text-center p-10">Afiliarse al sistema</h1>
</div>
<!-- direccion municipio provincia CP fechaNacimiento -->
<form action="" class="flex flex-col max-h-screen">
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Nombre *</span>
      <input class="input" type="text" placeholder="Nombre" required />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Primer Apellido *</span>
      <input class="input" type="text" placeholder="Apellido" required />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Segundo Apellido</span>
      <input class="input" type="text" placeholder="Segundo Apellido" />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>DNI *</span>
      <input
        class="input"
        type="text"
        placeholder="DNI"
        maxlength="9"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Teléfono de contacto *</span>
      <input
        class="input"
        type="tel"
        placeholder="Teléfono"
        maxlength="9"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Email *</span>
      <input class="input" type="email" placeholder="Email" required />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Dirección *</span>
      <input class="input" type="text" placeholder="Dirección" required />
    </label>
    <div class="w-full flex flex-row gap-8">
      <label class="label text-left py-4 w-full">
        <span>Municipio *</span>
        <input class="input" type="text" placeholder="Municipio" required />
      </label>
      <label class="label text-left py-4 w-full">
        <span>Codigo Postal *</span>
        <input
          class="input"
          type="number"
          placeholder="Codigo Postal"
          maxlength="5"
          required
        />
      </label>
    </div>
  </div>
  <div class="w-full flex flex-row gap-8">
    <label class="label text-left py-4 w-full">
      <span>Provincia *</span>
      <input class="input" type="text" placeholder="Provincia" required />
    </label><label class="label text-left py-4 w-full">
      <span>Fecha Nacimiento *</span>
      <input
        class="input"
        type="date"
        placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
        maxlength="5"
        required
      />
    </label>
  </div>
  <input
    type="submit"
    class="btn variant-filled-surface m-2 w-1/5 self-center"
    value="Afiliarse"
  />
</form>
