import { Navigate, useLocation } from "react-router-dom"

import { ISession } from ".."
import { PermissionsTypes } from "@shared/enums"
import React from "react"
import jwt_decode from "jwt-decode"
import { storage } from "@shared/utils"

export const getSession = (): ISession | boolean => {
	try {
		const token: string | boolean = storage.getToken()
		if (token) {
			return jwt_decode(token)
		} else {
			return false
		}
	} catch (error) {
		return false
	}
}
export const getPermissions = (): string[] | [] => {
	try {
		const token: string | boolean = storage.getToken()
		if (token) {
			const decodeAccessToken: ISession = jwt_decode(token)
			const decodePermissionToken: any = jwt_decode(
				decodeAccessToken.permissions
			)
			return decodePermissionToken?.permissions
		} else {
			return []
		}
	} catch (error) {
		return []
	}
}

export const hasAccessPermission = (
	allowedAccess: string[],
	userPermissions: string[]
): boolean => {
	const hasAccess = userPermissions.filter((role: string) =>
		allowedAccess.includes(role)
	)

	return hasAccess.length > 0
}

interface IRouteAuthorization {
	allowedAccess: PermissionsTypes[]
	component: any
}

export const RouteAuthorization: React.FC<IRouteAuthorization> = ({
	allowedAccess,
	component: Component,
}) => {
	let location = useLocation()
	const hasAccess: boolean = hasAccessPermission(
		allowedAccess,
		getPermissions()
	)
	return hasAccess ? (
		<Component />
	) : (
		<Navigate to="/" state={{ from: location }} />
	)
}
export const Authorization: React.FC<{
	allowedAccess: PermissionsTypes[]
	children?: any
	forbiddenFallback?: any
}> = ({
	allowedAccess,
	children,
	forbiddenFallback = <h4>Forbidden Access</h4>,
}) => {
	// const hasAccess: boolean = hasAccessPermission(
	// 	allowedAccess,
	// 	getPermissions()
	// )
	//Temporary
	return children
	// return hasAccess ? children : forbiddenFallback
}
