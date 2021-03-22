// Generated from Java9.g4 by ANTLR 4.9.1
// jshint ignore: start
const antlr4 = require('antlr4');

// This class defines a complete generic visitor for a parse tree produced by Java9Parser.
 class Java9Visitor extends antlr4.tree.ParseTreeVisitor {
	// Visit a parse tree produced by Java9Parser#literal.
	visitLiteral(ctx) {
	  console.log("Number: " + ctx.getText())
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primitiveType.
	visitPrimitiveType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#numericType.
	visitNumericType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#integralType.
	visitIntegralType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#floatingPointType.
	visitFloatingPointType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#referenceType.
	visitReferenceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classOrInterfaceType.
	visitClassOrInterfaceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classType.
	visitClassType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classType_lf_classOrInterfaceType.
	visitClassType_lf_classOrInterfaceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classType_lfno_classOrInterfaceType.
	visitClassType_lfno_classOrInterfaceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceType.
	visitInterfaceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceType_lf_classOrInterfaceType.
	visitInterfaceType_lf_classOrInterfaceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceType_lfno_classOrInterfaceType.
	visitInterfaceType_lfno_classOrInterfaceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeVariable.
	visitTypeVariable(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#arrayType.
	visitArrayType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#dims.
	visitDims(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeParameter.
	visitTypeParameter(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeParameterModifier.
	visitTypeParameterModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeBound.
	visitTypeBound(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#additionalBound.
	visitAdditionalBound(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeArguments.
	visitTypeArguments(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeArgumentList.
	visitTypeArgumentList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeArgument.
	visitTypeArgument(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#wildcard.
	visitWildcard(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#wildcardBounds.
	visitWildcardBounds(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#moduleName.
	visitModuleName(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#packageName.
	visitPackageName(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeName.
	visitTypeName(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#packageOrTypeName.
	visitPackageOrTypeName(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#expressionName.
	visitExpressionName(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodName.
	visitMethodName(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#ambiguousName.
	visitAmbiguousName(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#compilationUnit.
	visitCompilationUnit(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#ordinaryCompilation.
	visitOrdinaryCompilation(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#modularCompilation.
	visitModularCompilation(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#packageDeclaration.
	visitPackageDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#packageModifier.
	visitPackageModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#importDeclaration.
	visitImportDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#singleTypeImportDeclaration.
	visitSingleTypeImportDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeImportOnDemandDeclaration.
	visitTypeImportOnDemandDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#singleStaticImportDeclaration.
	visitSingleStaticImportDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#staticImportOnDemandDeclaration.
	visitStaticImportOnDemandDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeDeclaration.
	visitTypeDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#moduleDeclaration.
	visitModuleDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#moduleDirective.
	visitModuleDirective(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#requiresModifier.
	visitRequiresModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classDeclaration.
	visitClassDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#normalClassDeclaration.
	visitNormalClassDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classModifier.
	visitClassModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeParameters.
	visitTypeParameters(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeParameterList.
	visitTypeParameterList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#superclass.
	visitSuperclass(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#superinterfaces.
	visitSuperinterfaces(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceTypeList.
	visitInterfaceTypeList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classBody.
	visitClassBody(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classBodyDeclaration.
	visitClassBodyDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classMemberDeclaration.
	visitClassMemberDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#fieldDeclaration.
	visitFieldDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#fieldModifier.
	visitFieldModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableDeclaratorList.
	visitVariableDeclaratorList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableDeclarator.
	visitVariableDeclarator(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableDeclaratorId.
	visitVariableDeclaratorId(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableInitializer.
	visitVariableInitializer(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannType.
	visitUnannType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannPrimitiveType.
	visitUnannPrimitiveType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannReferenceType.
	visitUnannReferenceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannClassOrInterfaceType.
	visitUnannClassOrInterfaceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannClassType.
	visitUnannClassType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannClassType_lf_unannClassOrInterfaceType.
	visitUnannClassType_lf_unannClassOrInterfaceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannClassType_lfno_unannClassOrInterfaceType.
	visitUnannClassType_lfno_unannClassOrInterfaceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannInterfaceType.
	visitUnannInterfaceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannInterfaceType_lf_unannClassOrInterfaceType.
	visitUnannInterfaceType_lf_unannClassOrInterfaceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannInterfaceType_lfno_unannClassOrInterfaceType.
	visitUnannInterfaceType_lfno_unannClassOrInterfaceType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannTypeVariable.
	visitUnannTypeVariable(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannArrayType.
	visitUnannArrayType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodDeclaration.
	visitMethodDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodModifier.
	visitMethodModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodHeader.
	visitMethodHeader(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#result.
	visitResult(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodDeclarator.
	visitMethodDeclarator(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#formalParameterList.
	visitFormalParameterList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#formalParameters.
	visitFormalParameters(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#formalParameter.
	visitFormalParameter(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableModifier.
	visitVariableModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#lastFormalParameter.
	visitLastFormalParameter(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#receiverParameter.
	visitReceiverParameter(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#throws_.
	visitThrows_(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#exceptionTypeList.
	visitExceptionTypeList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#exceptionType.
	visitExceptionType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodBody.
	visitMethodBody(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#instanceInitializer.
	visitInstanceInitializer(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#staticInitializer.
	visitStaticInitializer(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constructorDeclaration.
	visitConstructorDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constructorModifier.
	visitConstructorModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constructorDeclarator.
	visitConstructorDeclarator(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#simpleTypeName.
	visitSimpleTypeName(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constructorBody.
	visitConstructorBody(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#explicitConstructorInvocation.
	visitExplicitConstructorInvocation(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumDeclaration.
	visitEnumDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumBody.
	visitEnumBody(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumConstantList.
	visitEnumConstantList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumConstant.
	visitEnumConstant(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumConstantModifier.
	visitEnumConstantModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumBodyDeclarations.
	visitEnumBodyDeclarations(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceDeclaration.
	visitInterfaceDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#normalInterfaceDeclaration.
	visitNormalInterfaceDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceModifier.
	visitInterfaceModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#extendsInterfaces.
	visitExtendsInterfaces(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceBody.
	visitInterfaceBody(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceMemberDeclaration.
	visitInterfaceMemberDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constantDeclaration.
	visitConstantDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constantModifier.
	visitConstantModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceMethodDeclaration.
	visitInterfaceMethodDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceMethodModifier.
	visitInterfaceMethodModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#annotationTypeDeclaration.
	visitAnnotationTypeDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#annotationTypeBody.
	visitAnnotationTypeBody(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#annotationTypeMemberDeclaration.
	visitAnnotationTypeMemberDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#annotationTypeElementDeclaration.
	visitAnnotationTypeElementDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#annotationTypeElementModifier.
	visitAnnotationTypeElementModifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#defaultValue.
	visitDefaultValue(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#annotation.
	visitAnnotation(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#normalAnnotation.
	visitNormalAnnotation(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#elementValuePairList.
	visitElementValuePairList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#elementValuePair.
	visitElementValuePair(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#elementValue.
	visitElementValue(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#elementValueArrayInitializer.
	visitElementValueArrayInitializer(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#elementValueList.
	visitElementValueList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#markerAnnotation.
	visitMarkerAnnotation(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#singleElementAnnotation.
	visitSingleElementAnnotation(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#arrayInitializer.
	visitArrayInitializer(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableInitializerList.
	visitVariableInitializerList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#block.
	visitBlock(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#blockStatements.
	visitBlockStatements(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#blockStatement.
	visitBlockStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#localVariableDeclarationStatement.
	visitLocalVariableDeclarationStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#localVariableDeclaration.
	visitLocalVariableDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#statement.
	visitStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#statementNoShortIf.
	visitStatementNoShortIf(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#statementWithoutTrailingSubstatement.
	visitStatementWithoutTrailingSubstatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#emptyStatement.
	visitEmptyStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#labeledStatement.
	visitLabeledStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#labeledStatementNoShortIf.
	visitLabeledStatementNoShortIf(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#expressionStatement.
	visitExpressionStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#statementExpression.
	visitStatementExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#ifThenStatement.
	visitIfThenStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#ifThenElseStatement.
	visitIfThenElseStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#ifThenElseStatementNoShortIf.
	visitIfThenElseStatementNoShortIf(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#assertStatement.
	visitAssertStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#switchStatement.
	visitSwitchStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#switchBlock.
	visitSwitchBlock(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#switchBlockStatementGroup.
	visitSwitchBlockStatementGroup(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#switchLabels.
	visitSwitchLabels(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#switchLabel.
	visitSwitchLabel(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumConstantName.
	visitEnumConstantName(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#whileStatement.
	visitWhileStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#whileStatementNoShortIf.
	visitWhileStatementNoShortIf(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#doStatement.
	visitDoStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#forStatement.
	visitForStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#forStatementNoShortIf.
	visitForStatementNoShortIf(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#basicForStatement.
	visitBasicForStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#basicForStatementNoShortIf.
	visitBasicForStatementNoShortIf(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#forInit.
	visitForInit(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#forUpdate.
	visitForUpdate(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#statementExpressionList.
	visitStatementExpressionList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enhancedForStatement.
	visitEnhancedForStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enhancedForStatementNoShortIf.
	visitEnhancedForStatementNoShortIf(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#breakStatement.
	visitBreakStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#continueStatement.
	visitContinueStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#returnStatement.
	visitReturnStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#throwStatement.
	visitThrowStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#synchronizedStatement.
	visitSynchronizedStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#tryStatement.
	visitTryStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#catches.
	visitCatches(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#catchClause.
	visitCatchClause(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#catchFormalParameter.
	visitCatchFormalParameter(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#catchType.
	visitCatchType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#finally_.
	visitFinally_(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#tryWithResourcesStatement.
	visitTryWithResourcesStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#resourceSpecification.
	visitResourceSpecification(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#resourceList.
	visitResourceList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#resource.
	visitResource(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableAccess.
	visitVariableAccess(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primary.
	visitPrimary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray.
	visitPrimaryNoNewArray(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lf_arrayAccess.
	visitPrimaryNoNewArray_lf_arrayAccess(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lfno_arrayAccess.
	visitPrimaryNoNewArray_lfno_arrayAccess(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lf_primary.
	visitPrimaryNoNewArray_lf_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary.
	visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary.
	visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lfno_primary.
	visitPrimaryNoNewArray_lfno_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary.
	visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary.
	visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classLiteral.
	visitClassLiteral(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classInstanceCreationExpression.
	visitClassInstanceCreationExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classInstanceCreationExpression_lf_primary.
	visitClassInstanceCreationExpression_lf_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classInstanceCreationExpression_lfno_primary.
	visitClassInstanceCreationExpression_lfno_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeArgumentsOrDiamond.
	visitTypeArgumentsOrDiamond(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#fieldAccess.
	visitFieldAccess(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#fieldAccess_lf_primary.
	visitFieldAccess_lf_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#fieldAccess_lfno_primary.
	visitFieldAccess_lfno_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#arrayAccess.
	visitArrayAccess(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#arrayAccess_lf_primary.
	visitArrayAccess_lf_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#arrayAccess_lfno_primary.
	visitArrayAccess_lfno_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodInvocation.
	visitMethodInvocation(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodInvocation_lf_primary.
	visitMethodInvocation_lf_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodInvocation_lfno_primary.
	visitMethodInvocation_lfno_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#argumentList.
	visitArgumentList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodReference.
	visitMethodReference(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodReference_lf_primary.
	visitMethodReference_lf_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodReference_lfno_primary.
	visitMethodReference_lfno_primary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#arrayCreationExpression.
	visitArrayCreationExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#dimExprs.
	visitDimExprs(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#dimExpr.
	visitDimExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constantExpression.
	visitConstantExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#expression.
	visitExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#lambdaExpression.
	visitLambdaExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#lambdaParameters.
	visitLambdaParameters(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#inferredFormalParameterList.
	visitInferredFormalParameterList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#lambdaBody.
	visitLambdaBody(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#assignmentExpression.
	visitAssignmentExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#assignment.
	visitAssignment(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#leftHandSide.
	visitLeftHandSide(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#assignmentOperator.
	visitAssignmentOperator(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#conditionalExpression.
	visitConditionalExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#conditionalOrExpression.
	visitConditionalOrExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#conditionalAndExpression.
	visitConditionalAndExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#inclusiveOrExpression.
	visitInclusiveOrExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#exclusiveOrExpression.
	visitExclusiveOrExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#andExpression.
	visitAndExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#equalityExpression.
	visitEqualityExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#relationalExpression.
	visitRelationalExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#shiftExpression.
	visitShiftExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#additiveExpression.
	visitAdditiveExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#multiplicativeExpression.
	visitMultiplicativeExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unaryExpression.
	visitUnaryExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#preIncrementExpression.
	visitPreIncrementExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#preDecrementExpression.
	visitPreDecrementExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unaryExpressionNotPlusMinus.
	visitUnaryExpressionNotPlusMinus(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#postfixExpression.
	visitPostfixExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#postIncrementExpression.
	visitPostIncrementExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#postIncrementExpression_lf_postfixExpression.
	visitPostIncrementExpression_lf_postfixExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#postDecrementExpression.
	visitPostDecrementExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#postDecrementExpression_lf_postfixExpression.
	visitPostDecrementExpression_lf_postfixExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#castExpression.
	visitCastExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#identifier.
	visitIdentifier(ctx) {
	  console.log("id :" + ctx.getText())
	  return this.visitChildren(ctx);
	}
}

module.exports = {
	Java9Visitor: Java9Visitor,
};