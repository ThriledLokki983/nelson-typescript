<!-- @format -->

<!-- @format

import { Dispatch } from 'redux'
import { Country } from './types'

export const INSERT_COUNTRY = 'INSERT_COUNTRY'

// country param is a country object
export const insertCart = (country: Country) => {
return {
type: INSERT_COUNTRY,
payload: country,
}
}

// export const saveCartWhenInsert = country => {
// return (dispatch, getState) => {
// const currentCart = getState().cart
// const newCart = [...currentCart, country]
// localStorage.setItem('cart', JSON.stringify(newCart))

// dispatch(insertCart(country))
// }
// }

//cart is an array of object: [{name: "", languages: , }, {}, {}]

export const remove = (countryName: string) => {
return {
type: 'REMOVE_COUNTRY',
payload: countryName,
}
}

// export const saveCartWhenRemove = country => {
// return (dispatch, getState) => {
// const currentCart = getState().cart
// const newCart = currentCart.filter(c => c.name !== country.name)
// localStorage.setItem('cart', JSON.stringify(newCart))

// dispatch(remove(country))
// }
// }

export const getCountries = () => {
// return function() {}
return async (dispatch: Dispatch, getState: any) => {
try {
const data = await fetch('https://restcountries.eu/rest/v2/all')
const countriesList = (await data.json()) as Country[]
console.log('countries', countriesList)

      dispatch(fetchCountriesSuccess(countriesList))
    } catch (error) {
      console.log('error', error)
      dispatch(fetchError(error))
    }

}
}

export const fetchCountriesSuccess = (data: Country[]) => {
return {
type: 'FETCH_COUNTRIES_SUCCESS',
payload: data,
}
}

// -----
export const getOneCountry = (countryName: string) => {
return async (dispatch: Dispatch, getState: any) => {
const data = await fetch(
`https://restcountries.eu/rest/v2/name/${countryName}`
)

    const country = (await data.json()) as Country[]
    dispatch(fetchOneCountrySuccess(country))

}
}

export const fetchOneCountrySuccess = (data: Country[]) => {
return {
type: 'FETCH_ONE_COUNTRY_SUCCESS',
payload: data,
}
}

export const fetchError = (error: any) => {
return {
type: 'FETCH_ERROR',
payload: error,
}
}

export const changeToLightTheme = () => {
return {
type: 'CHANGE_TO_LIGHT',
}
}

export const changeToDarkTheme = () => {
return {
type: 'CHANGE_TO_DARK',
}
}

// type FetchError = ReturnType<typeof fetchError>
// type FetchOneCountrySuccess = ReturnType<typeof fetchOneCountrySuccess>
// type FetchCountriesSuccess = ReturnType<typeof fetchCountriesSuccess>
// type Remove = ReturnType<typeof remove>
// type InsertCart = ReturnType<typeof insertCart>

type GenericAction<T> = {
type: T
}

type GenericActionWithPayload<T, K> = {
type: T
payload: K
}

// type FetchError = {
// type: 'FETCH_ERROR'
// payload: any
// }

type FetchError = GenericActionWithPayload<'FETCH_ERROR', any>

// type FetchOneCountrySuccess = {
// type: 'FETCH_ONE_COUNTRY_SUCCESS'
// payload: Country[]
// }

type FetchOneCountrySuccess = GenericActionWithPayload<
'FETCH_ONE_COUNTRY_SUCCESS',
Country[]

>

type FetchCountriesSuccess = {
type: 'FETCH_COUNTRIES_SUCCESS'
payload: Country[]
}

type Remove = {
type: 'REMOVE_COUNTRY'
payload: string
}

type InsertCart = {
type: typeof INSERT_COUNTRY
payload: Country
}

type ChangeToDarkTheme = {
type: 'CHANGE_TO_DARK'
}

type ChangeToLightTheme = {
type: 'CHANGE_TO_LIGHT'
}

// const test: FetchError = {
// type: 'hello',
// payload: ''
// }

export type AllActions =
| FetchError
| FetchCountriesSuccess
| FetchOneCountrySuccess
| Remove
| InsertCart
| ChangeToLightTheme
| ChangeToDarkTheme -->
