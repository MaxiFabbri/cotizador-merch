import Users from "../dao/Users.dao.js";
import CustomerPaymentMethods from "../dao/CustomerPaymentMethods.dao.js";
import SupplierPaymentMethods from "../dao/SupplierPaymentMethods.dao.js";
import Customers from "../dao/Customers.dao.js";
import Suppliers from "../dao/Suppliers.dao.js";
import GeneralParameters from "../dao/GeneralParameters.dao.js";
import quotations from "../dao/Quotations.dao.js";

import UserRepository from "../repository/UserRepository.js";
import CustomerPaymentMethodRepository from "../repository/CustomerPaymentMethodRepository.js";
import SupplierPaymentMethodRepository from "../repository/SupplierPaymentMethodRepository.js";
import CustomerRepository from "../repository/CustomerRepository.js";
import SupplierRepository from "../repository/SupplierRepository.js";
import GeneralParameterRepository from "../repository/GeneralParameterRepository.js";
import QuotationRepository from "../repository/QuotationRepository.js";

export const usersService = new UserRepository(new Users());
export const customerPaymentMethodService = new CustomerPaymentMethodRepository(new CustomerPaymentMethods());
export const supplierPaymentMethodService = new SupplierPaymentMethodRepository(new SupplierPaymentMethods());
export const customerService = new CustomerRepository(new Customers());
export const supplierService = new SupplierRepository(new Suppliers());
export const generalParameterService = new GeneralParameterRepository(new GeneralParameters());
export const quotationService = new QuotationRepository(new quotations());
