"use client";
import { swalToast } from "@/helpers/swal";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Messenger = () => {
	const searchParams = useSearchParams();

	const message = searchParams.get("msg");
	const type = searchParams.get("type") ?? "success";

	if (message) swalToast(message, type);

	return null;
};

export default Messenger;
