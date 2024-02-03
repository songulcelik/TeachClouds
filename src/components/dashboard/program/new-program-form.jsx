"use client";
import { createProgramAction } from "@/actions/program-actions";
import CancelButton from "@/components/common/form-fields/cancel-button";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
const NewProgramForm = () => {
    const [state, dispatch] = useFormState(createProgramAction, initialResponse);
    return (
        <div className="container ">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">New</div>
                    {state?.message ? (
                        <div className="alert alert-danger">
                            {state.message}
                        </div>
                    ) : null}
                    <form action={dispatch} noValidate>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                            <div className="col">
                              
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className={`form-control ${isInvalid(
                                            state.errors?.creditScore
                                        )}`}
                                        id="creditScore"
                                        name="creditScore"
                                        placeholder="Credit"
                                        min={1}
                                        max={100}
                                    />
                                    <label htmlFor="creditScore">Credit</label>
                                    <div className="invalid-feedback">
                                        {state.errors?.creditScore}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="compulsory"
                                        name="compulsory"
                                        value={true}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="compulsory"
                                    >
                                        Compulsory
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <CancelButton />
                            <SubmitButton title="Create" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default NewProgramForm;
