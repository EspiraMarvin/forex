export const logThis = function (data) {
  console.log(data)
}

export const wait = function (timeOut) {
  return new Promise(resolve => {
    setTimeout(resolve, timeOut)
  })
}

export const appendEditForm = function (form) {
  const formData = new FormData()

  for (const key in form) {
    formData.append(key, form[key])
  }

  formData.append('_method', 'put')

  return formData
}

export const appendForm = function (form) {
  const formData = new FormData()

  for (const key in form) {
    formData.append(key, form[key])
  }

  return formData
}
